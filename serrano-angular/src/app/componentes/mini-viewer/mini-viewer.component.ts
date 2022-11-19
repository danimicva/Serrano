import { Component, ElementRef, OnInit, Input, ViewChild } from '@angular/core';
import { XY } from 'src/app/interfaces/data-types';
import * as tf from '@tensorflow/tfjs';
import { LogicService } from 'src/app/services/logic.service';

@Component({
  selector: 'app-mini-viewer',
  templateUrl: './mini-viewer.component.html',
  styleUrls: ['./mini-viewer.component.scss']
})
export class MiniViewerComponent implements OnInit {

  context1: CanvasRenderingContext2D;

  @ViewChild('canvas1', { static: true }) public canvas1: ElementRef;


  public pixelSize: number = 1;

  @Input() state: tf.Variable<tf.Rank>;
  @Input() sizeX: number;
  @Input() sizeY: number;

  constructor() { }

  ngOnInit(): void {
    if (this.state) {

      this.initCanvas();

      tf.tidy(() => {
        const imageData = LogicService.GetImageData(this.state, { x: this.sizeX, y: this.sizeY });
        this.DrawCanvas(imageData);
      });

    }
  }

  public initCanvas(): void {


    const canvas1HtmlElement: HTMLCanvasElement = this.canvas1.nativeElement;
    this.context1 = canvas1HtmlElement.getContext('2d');

    canvas1HtmlElement.width = this.sizeX;
    canvas1HtmlElement.height = this.sizeY;
    canvas1HtmlElement.style.width = `${this.sizeX * this.pixelSize}px`;
    canvas1HtmlElement.style.height = `${this.sizeY * this.pixelSize}px`;
  }

  public DrawCanvas(imageData: ImageData): void {

    this.context1.clearRect(0, 0, this.sizeX, this.sizeY);

    this.context1.putImageData(imageData, 0, 0);

  }

}
