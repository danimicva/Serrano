import { Component, Input, OnInit, ViewChild } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import { MyMouseEvent, ModelData, CutPasteData, XY, ClipboardData, MyMouseEventType } from 'src/app/interfaces/data-types';
import { LogicService } from 'src/app/services/logic.service';
import { ModelsService } from 'src/app/services/models.service';
import { ViewerComponent } from '../viewer/viewer.component';

@Component({
  selector: 'app-automata',
  templateUrl: './automata.component.html',
  styleUrls: ['./automata.component.scss']
})
export class AutomataComponent implements OnInit {

  models = ModelsService.Models;

  @ViewChild('viewer', { static: true }) public viewer: ViewerComponent;

  gridSize: number = 96;
  pixelSize: number = 4;
  damageSize: number = 8;
  fireRate: number = 0.5;

  public shownChannel: number = -1

  modelData: ModelData = undefined;
  actualModel
  customModelString: string;

  currentPixelPosition: XY = undefined;
  currentPixel: any = undefined;

  cutPastePixelSize: number = 1;

  play: boolean = false;

  cutPasteData: CutPasteData;

  clipboard: ClipboardData[] = [];

  lassoList: XY[] = [];

  constructor(private modelsService: ModelsService) { }

  ngOnInit(): void {
    this.restartCutPasteData();
    this.actualModel = this.modelsService.getModelFullPath(ModelsService.Models[0]);
    this.startModel();
  }

  public loadModel(path: string) {
    this.actualModel = this.modelsService.getModelFullPath(path);
    this.startModel();
  }

  public loadCustomModel() {
    this.actualModel = URL.createObjectURL(new Blob(
      [this.customModelString], { type: 'application/json' }));
    this.startModel();
  }

  async startModel() {

    LogicService.DisposeModelData(this.modelData);
    this.restartCutPasteData();
    this.lassoList = [];

    this.modelData = await LogicService.InitModel(this.gridSize, this.actualModel);
    this.viewer.initCanvas(this.modelData.size, this.pixelSize);
    this.render();
    this.draw();
  }
  lasso = false;
  mouseEvent(e: MyMouseEvent) {
    console.log("%o", e);
    if (e.shiftKey && e.ctrlKey) {
      LogicService.PlantSeed(this.modelData, e.pos);
      this.draw();
    } else if (e.shiftKey) {
      //this.addToCopyList(e.pos.x, e.pos.y);
      if (this.lasso) {
        if (e.type == MyMouseEventType.MouseMove) {
          this.addToLassoList(e.pos.x, e.pos.y);
        } else if (e.type == MyMouseEventType.MouseUp) {
          this.lasso = false;
          this.addToLassoList(this.lassoList[0].x, this.lassoList[0].y, true);
          this.closeLasso();
        }
      } else {
        if (e.type == MyMouseEventType.MouseDown) {
          this.lasso = true;
          this.lassoList = [];
          this.addToLassoList(e.pos.x, e.pos.y);
          this.restartCutPasteData();
        }
      }

    } else if (e.ctrlKey) {
      this.calculateDistance(e.pos.x, e.pos.y);
    } else {
      if (e.type == MyMouseEventType.MouseUp && this.lasso) {
        this.addToLassoList(this.lassoList[0].x, this.lassoList[0].y, true);
        this.closeLasso();
      }
      //LogicService.Damage(this.modelData, e.xy, this.damageSize);
      this.currentPixelPosition = { x: e.pos.x, y: e.pos.y };
      this.loadCurrentPixel();
    }
  }

  addToLassoList(x, y, force = false) {
    if (this.lassoList.find(p => p.x == x && p.y == y) == undefined || force)
      this.lassoList.push({ x, y });

    this.draw();
  }

  closeLasso() {

    const firstX = [...this.lassoList].sort((a, b) => a.x - b.x)[0].x;
    const lastX = [...this.lassoList].sort((a, b) => b.x - a.x)[0].x;
    const firstY = [...this.lassoList].sort((a, b) => a.y - b.y)[0].y;
    const lastY = [...this.lassoList].sort((a, b) => b.y - a.y)[0].y;

    for (let i = firstX + 1; i < lastX; i++) {
      for (let j = firstY + 1; j < lastY; j++) {
        //for (let i = 0; i < this.modelData.size.x; i++) {
        //  for (let j = 0; j < this.modelData.size.y; j++) {

        if (this.isPixelInLasso2(this.lassoList, i, j)) {
          this.addToCopyList(i, j);
        }
      }
    }
    this.lassoList = [];
    this.draw();

  }

  /**
   * Función obtenida de Codepen.io
   * 
   * https://codepen.io/cranes/pen/GvobwB
   * 
   * https://blog.codepen.io/documentation/licensing/
   * @param lassoList 
   * @param x 
   * @param y 
   * @returns 
   */
  isPixelInLasso2(lassoList, x, y) {

    if (lassoList.length <= 1) {
      return false;
    }

    let intercessionCount = 0;
    for (let index = 1; index < lassoList.length; index++) {
      let start = lassoList[index - 1];
      let end = lassoList[index];
      let line = { start: start, end: end };

      //Testes

      //*************************************************
      //* Adicionar teste bounding box intersection aqui *
      //*************************************************

      var ray = { Start: { x, y }, End: { x: 99999, y: 0 } };
      var segment = { Start: start, End: end };
      var rayDistance = {
        x: ray.End.x - ray.Start.x,
        y: ray.End.y - ray.Start.y
      };
      var segDistance = {
        x: segment.End.x - segment.Start.x,
        y: segment.End.y - segment.Start.y
      };

      var rayLength = Math.sqrt(Math.pow(rayDistance.x, 2) + Math.pow(rayDistance.y, 2));
      var segLength = Math.sqrt(Math.pow(segDistance.x, 2) + Math.pow(segDistance.y, 2));

      if ((rayDistance.x / rayLength == segDistance.x / segLength) &&
        (rayDistance.y / rayLength == segDistance.y / segLength)) {
        continue;
      }

      var T2 = (rayDistance.x * (segment.Start.y - ray.Start.y) + rayDistance.y * (ray.Start.x - segment.Start.x)) / (segDistance.x * rayDistance.y - segDistance.y * rayDistance.x);
      var T1 = (segment.Start.x + segDistance.x * T2 - ray.Start.x) / rayDistance.x;

      //Parametric check.
      if (T1 < 0) {
        continue;
      }
      if (T2 < 0 || T2 > 1) {
        continue
      };
      if (isNaN(T1)) {
        continue
      }; //rayDistance.X = 0

      intercessionCount++;
    }
    return intercessionCount & 1;
    /*
        if (intercessionCount == 0) {
          return false;
        }
        console.log(intercessionCount);
        if (intercessionCount & 1) {
          return true;
        } else {
          return false;
        }*/
  }


  private isPixelInLasso(lassoList: XY[], x, y): boolean {

    // If the pixel is in the lasso, we do not count it.
    if (this.lassoList.find(p => p.x == x && p.y == y) != undefined)
      return false;

    // First we seek for inclusion in the horizontal axis
    let hAxis = this.lassoList.filter(p => p.y == y);
    hAxis = hAxis.sort((a, b) => a.x - b.x);

    // If the pixel is before the first pixel in the lasso, is not in there
    if (x <= hAxis[0].x)
      return false;

    // First we seek for inclusion in the horizontal axis
    let vAxis = this.lassoList.filter(p => p.x == x);
    vAxis = vAxis.sort((a, b) => a.y - b.y);

    // If the pixel is before the first pixel in the lasso, is not in there
    if (y <= vAxis[0].y)
      return false;

    // We start at the first pixel of the lasso (inside of it).
    // Whenever we change pixel, we switch the openness.
    // if we find the pixel before the point, lassoOpen will tell us if it's inside
    let lassoXOpen = true;
    for (let i = 1; i < hAxis.length; i++) {
      if (x < hAxis[i].x)
        if (!lassoXOpen)
          return false;
        else {
          return lassoXOpen;
        }
      lassoXOpen = !lassoXOpen;
    }

    return false;
  }

  private loadCurrentPixel() {
    if (!this.currentPixelPosition)
      return;
    try {
      this.currentPixel = this.modelData.state.slice(
        [0, this.currentPixelPosition.y, this.currentPixelPosition.x],
        [1, 1, 1]
      );
    } catch (e) {
      console.log(e);
    }
  }

  calculateDistance(x, y) {
    if (this.cutPasteData.pixelList.length == 0)
      return;

    this.cutPasteData.shift = {
      x: x - this.cutPasteData.pixelList[0].x,
      y: y - this.cutPasteData.pixelList[0].y
    };
    this.draw();
  }

  addToCopyList(x, y) {
    this.cutPasteData.state = this.modelData.state;

    for (let i = x - this.cutPastePixelSize + 1; i < x + this.cutPastePixelSize; i++) {
      for (let j = y - this.cutPastePixelSize + 1; j < y + this.cutPastePixelSize; j++) {
        if (this.cutPasteData.pixelList.filter(p => p.x == i && p.y == j).length > 0
          || !LogicService.IsPixelAliveByModelAndPos(this.modelData, { x, y }))
          continue;
        this.cutPasteData.pixelList.push({ x: i, y: j });
      }
    }
    this.cutPasteData.pixelList.sort((a, b) => a.x != b.x ? a.x - b.x : a.y - b.y);
    this.draw();
  }

  cutPaste(originState, destState, pixelList, shift, removeOrigin) {

    let despausar = false;
    if (this.play) {
      this.play = false;
      despausar = true;
    }
    //while (this.cutPasteData.pixelList.length > 0) {
    //while (pixelList.length > 0) {
    for (let p of pixelList) {
      //const p = pixelList[0];
      LogicService.CopyPixel(
        originState, destState,
        { x: p.x, y: p.y },
        { x: p.x + shift.x, y: p.y + shift.y },
        removeOrigin
      );
      //pixelList.shift();
    };

    if (despausar)
      this.play = true;

    this.loadCurrentPixel();
    this.draw();
  }

  step() {
    LogicService.Step(this.modelData, this.fireRate);
    this.draw();
    this.loadCurrentPixel();
  }

  private render() {
    if (!this.modelData.state)
      return;
    if ((this.play) || !this.modelData.state) {
      this.step();
    }
    requestAnimationFrame(() => this.render());
  }

  private draw() {
    tf.tidy(() => {
      const imageData = LogicService.GetImageData(this.modelData.state, this.modelData.size, this.shownChannel);
      this.viewer.DrawCanvas(imageData, this.cutPasteData, this.lassoList);
    });
  }

  public changeShownChannel(channel) {
    this.shownChannel = parseInt(channel);
    this.draw();
  }

  restartCutPasteData() {
    this.cutPasteData = { state: this.modelData?.state, pixelList: [], removeOrigin: true, shift: { x: 0, y: 0 } };
  }

  public addToClipboard() {
    if (this.cutPasteData.pixelList.length == 0)
      return;

    let tensor = tf.variable(tf.tensor(
      new Array(this.modelData.channelN * this.modelData.size.x * this.modelData.size.x).fill(0),
      [1, this.modelData.size.x, this.modelData.size.y, this.modelData.channelN]));

    let pixelList2 = [...this.cutPasteData.pixelList];

    this.cutPaste(this.modelData.state, tensor, this.cutPasteData.pixelList, { x: 0, y: 0 }, false);

    this.clipboard.push({ state: tensor, pixelList: pixelList2 });

  }

  copyCutButton() {
    this.cutPaste(
      this.cutPasteData.state,
      this.modelData.state,
      this.cutPasteData.pixelList,
      this.cutPasteData.shift,
      this.cutPasteData.removeOrigin);
    this.restartCutPasteData();
  }

  clipboardClicked(clip: ClipboardData) {
    this.cutPasteData = { state: clip.state, pixelList: clip.pixelList, removeOrigin: false, shift: { x: 0, y: 0 } }
  }

}
