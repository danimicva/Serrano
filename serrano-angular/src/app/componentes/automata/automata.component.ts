import { Component, Input, OnInit, ViewChild } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import { MyMouseEvent, ModelData, CutPasteData, XY } from 'src/app/interfaces/data-types';
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

  modelData: ModelData = undefined;
  actualModel

  currentPixelPosition: XY = undefined;
  currentPixel: any = undefined;

  cutPastePixelSize: number = 1;

  play: boolean = false;

  cutPasteData: CutPasteData;

  constructor(private modelsService: ModelsService) { }

  ngOnInit(): void {
    this.actualModel = this.modelsService.getModelFullPath(ModelsService.Models[0]);
    this.startModel();
  }

  public loadModel(path: string){
    this.actualModel = this.modelsService.getModelFullPath(path);
    this.startModel();
  }

  async startModel() {

    LogicService.DisposeModelData(this.modelData);
    this.restartCutPasteData();

    this.modelData = await LogicService.InitModel(this.gridSize, this.actualModel);
    this.viewer.initCanvas(this.modelData.size, this.pixelSize);
    this.render();
  }

  mouseEvent(e: MyMouseEvent) {
    if (e.shiftKey && e.ctrlKey) {
      LogicService.PlantSeed(this.modelData, e.pos);
    } else if (e.shiftKey) {
      this.addToCopyList(e.pos.x, e.pos.y);
    } else if (e.ctrlKey) {
      this.calculateDistance(e.pos.x, e.pos.y);
    } else {
      //LogicService.Damage(this.modelData, e.xy, this.damageSize);
      this.currentPixelPosition = { x: e.pos.x, y: e.pos.y };
      this.loadCurrentPixel();
    }

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
      debugger;
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
  }

  addToCopyList(x, y) {

    for (let i = x - this.cutPastePixelSize + 1; i < x + this.cutPastePixelSize; i++) {
      for (let j = y - this.cutPastePixelSize + 1; j < y + this.cutPastePixelSize; j++) {
        if (this.cutPasteData.pixelList.filter(p => p.x == i && p.y == j).length > 0
          || !LogicService.IsPixelAliveByModelAndPos(this.modelData, { x, y }))
          continue;
        this.cutPasteData.pixelList.push({ x: i, y: j });
      }
    }
    this.cutPasteData.pixelList.sort((a, b) => a.x != b.x ? a.x - b.x : a.y - b.y);

  }

  cutPaste() {

    let despausar = false;
    if (this.play) {
      this.play = false;
      despausar = true;
    }
    while (this.cutPasteData.pixelList.length > 0) {
      const p = this.cutPasteData.pixelList[0];
      LogicService.CopyPixel(
        this.modelData,
        { x: p.x, y: p.y },
        { x: p.x + this.cutPasteData.shift.x, y: p.y + this.cutPasteData.shift.y },
        this.cutPasteData.removeOrigin
      );
      this.cutPasteData.pixelList.shift();
    };

    if (despausar)
      this.play = true;

    this.loadCurrentPixel();
  }

  step(force = false) {
    if ((!this.play && !force) || !this.modelData.state)
      return;
    LogicService.Step(this.modelData, this.fireRate);
    this.loadCurrentPixel();
  }

  private render() {
    if(!this.modelData.state)
      return;

    this.step();
    tf.tidy(() => {
      const imageData = LogicService.GetImageData(this.modelData);
      this.viewer.DrawCanvas(imageData, this.cutPasteData);
    });
    requestAnimationFrame(() => this.render());
  }


  restartCutPasteData() {
    this.cutPasteData = { pixelList: [], removeOrigin: true, shift: { x: 0, y: 0 } };
  }


}
