import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CutPasteData, MyMouseEvent, MyMouseEventType, XY } from 'src/app/interfaces/data-types';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  context: CanvasRenderingContext2D;

  @ViewChild('canvas', { static: true }) public canvas: ElementRef;

  private size: XY;
  private pixelSize: number;

  @Output() mouseEvent = new EventEmitter<MyMouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  public initCanvas(size: XY, pixelSize: number): void {

    this.size = size;
    this.pixelSize = pixelSize;

    const canvasHtmlElement: HTMLCanvasElement = this.canvas.nativeElement;
    this.context = canvasHtmlElement.getContext('2d');

    canvasHtmlElement.width = this.size.x;
    canvasHtmlElement.height = this.size.y;
    canvasHtmlElement.style.width = `${this.size.x * this.pixelSize}px`;
    canvasHtmlElement.style.height = `${this.size.y * this.pixelSize}px`;

    canvasHtmlElement.onmousedown = e => {
      if (e.buttons != 1)
        return;
      const x = Math.floor(e.offsetX / this.pixelSize);
      const y = Math.floor(e.offsetY / this.pixelSize);
      this.mouseEvent.emit({
        pos: { x, y },
        type: MyMouseEventType.MouseDown,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey
      });
    }

    canvasHtmlElement.onmousemove = e => {
      if (e.buttons != 1)
        return;
      const x = Math.floor(e.offsetX / this.pixelSize);
      const y = Math.floor(e.offsetY / this.pixelSize);
      this.mouseEvent.emit({
        pos: { x, y },
        type: MyMouseEventType.MouseMove,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey
      });
    }

    canvasHtmlElement.onmouseup = e => {
      if (e.buttons != 1)
        return;
      const x = Math.floor(e.offsetX / this.pixelSize);
      const y = Math.floor(e.offsetY / this.pixelSize);
      this.mouseEvent.emit({
        pos: { x, y },
        type: MyMouseEventType.MouseUp,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey
      });
    }
  }

  public DrawCanvas(imageData: ImageData, cutPasteData: CutPasteData): void {

    this.context.putImageData(imageData, 0, 0);

    this.context.fillStyle = "rgba(0, 255, 0, 0.3)";
    cutPasteData.pixelList.forEach(p => {
      this.context.fillRect(p.x, p.y, 1, 1);
    });

    if (!(cutPasteData.shift.x == 0 && cutPasteData.shift.y == 0)
      && cutPasteData.pixelList.length > 0) {
      this.context.fillStyle = "rgba(0, 0, 255, 0.3)";
      cutPasteData.pixelList.forEach(p => {
        this.context.fillRect(p.x + cutPasteData.shift.x, p.y + cutPasteData.shift.y, 1, 1);
      });
      /* Código para pintar una línea hacia donde se mueve
    this.context.strokeStyle = "black";
    this.context.lineWidth = 1;

    this.context.beginPath();
    this.context.moveTo(
      cutPasteData.pixelList[0].x,
      cutPasteData.pixelList[0].y
    );
    this.context.lineTo(
      cutPasteData.pixelList[0].x + cutPasteData.shift.x,
      cutPasteData.pixelList[0].y + cutPasteData.shift.y
    );
    this.context.stroke();*/
    }

  }


}
