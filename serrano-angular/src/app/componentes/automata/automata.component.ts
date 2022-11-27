import { Component, OnInit, ViewChild } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import { MyMouseEvent, ModelData, CutPasteData, XY, ClipboardData, MyMouseEventType } from 'src/app/interfaces/data-types';
import { LogicService } from 'src/app/services/logic.service';
import { ModelsService } from 'src/app/services/models.service';
import { UtilsService } from 'src/app/services/utils.service';
import { ViewerComponent } from '../viewer/viewer.component';

export enum Mode {
  Inspect = 1,
  Selection = 2,
  Write = 3,
  PlantSeed = 4,
  Damage = 5
}

@Component({
  selector: 'app-automata',
  templateUrl: './automata.component.html',
  styleUrls: ['./automata.component.scss']
})
export class AutomataComponent implements OnInit {

  modeType = Mode;

  models = ModelsService.Models;

  @ViewChild('viewer', { static: true }) public viewer: ViewerComponent;

  gridSize: number = 96;
  pixelSize: number = 4;
  damageSize: number = 8;
  fireRate: number = 0.5;

  mode: Mode = Mode.Inspect;

  writeChannel: number = 0;
  writeValue: number = 1;
  writeRadius: number = 5;

  public shownChannel: number = -1

  modelData: ModelData = undefined;
  actualModel
  customModelString: string;

  cutPastePixelSize: number = 1;

  play: boolean = false;

  cutPasteData: CutPasteData;

  clipboard: ClipboardData[] = [];

  lassoList: XY[] = [];

  constructor(
    private modelsService: ModelsService,
    private utilsService: UtilsService) { }

  createRange(i: number) {
    return new Array(i).fill(0).map((n, index) => index);
  }

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

    if (!this.mode)
      return;

    switch (this.mode) {
      case Mode.Inspect:
        this.loadCurrentPixel(e.pos.x, e.pos.y);
        break;

      case Mode.Selection:
        if (this.lasso) {
          if (e.type == MyMouseEventType.MouseMove) {
            this.addToLassoList(e.pos.x, e.pos.y);
          } else if (e.type == MyMouseEventType.MouseUp) {
            this.lasso = false;
            this.addToLassoList(this.lassoList[0].x, this.lassoList[0].y, true);
            this.closeLasso();
          }
        } else {
          if (e.ctrlKey) {
            this.calculateDistance(e.pos.x, e.pos.y);
          } else if (e.type == MyMouseEventType.MouseDown) {
            this.lasso = true;
            this.lassoList = [];
            this.addToLassoList(e.pos.x, e.pos.y);
            this.restartCutPasteData();
          }
        }
        break;

      case Mode.Write:
        //if (e.type == MyMouseEventType.MouseDown) {
        LogicService.Write(this.modelData, { x: e.pos.x, y: e.pos.y }, Number(this.writeRadius), Number(this.writeChannel), Number(this.writeValue));
        //}
        break;

      case Mode.PlantSeed:
        LogicService.PlantSeed(this.modelData, e.pos);
        break;

      case Mode.Damage:
        LogicService.Damage(this.modelData, { x: e.pos.x, y: e.pos.y }, this.damageSize);
        break;
    }
    this.draw();
    this.reloadPixelInfo();
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
        if (this.utilsService.isPixelInLasso(this.lassoList, i, j)) {
          this.addToCopyList(i, j);
        }
      }
    }
    this.lassoList = [];
    this.draw();

  }


  currentPixelPosition: XY = undefined;
  currentPixel: any = undefined;

  private loadCurrentPixel(x: number, y: number) {
    this.currentPixelPosition = { x, y };
    this.reloadPixelInfo();
  }

  private reloadPixelInfo() {

    if (!this.currentPixelPosition)
      return;

    this.currentPixel = this.modelData.state.slice(
      [0, this.currentPixelPosition.y, this.currentPixelPosition.x],
      [1, 1, 1]
    );
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
    for (let p of pixelList) {
      LogicService.CopyPixel(
        originState, destState,
        { x: p.x, y: p.y },
        { x: p.x + shift.x, y: p.y + shift.y },
        removeOrigin
      );
    };

    if (despausar)
      this.play = true;

    this.reloadPixelInfo();
    this.draw();
  }

  step() {
    LogicService.Step(this.modelData, this.fireRate);
    this.draw();
    this.reloadPixelInfo();
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
