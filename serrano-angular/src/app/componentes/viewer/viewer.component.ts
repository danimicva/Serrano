import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CutPasteData, MyMouseEvent, MyMouseEventType, XY } from 'src/app/interfaces/data-types';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  context1: CanvasRenderingContext2D;
  context2: CanvasRenderingContext2D;

  @ViewChild('canvas1', { static: true }) public canvas1: ElementRef;
  @ViewChild('canvas2', { static: true }) public canvas2: ElementRef;

  public size: XY;
  public pixelSize: number;

  @Output() mouseEvent = new EventEmitter<MyMouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  public initCanvas(size: XY, pixelSize: number): void {

    this.size = size;
    this.pixelSize = pixelSize;

    const canvas1HtmlElement: HTMLCanvasElement = this.canvas1.nativeElement;
    this.context1 = canvas1HtmlElement.getContext('2d');

    canvas1HtmlElement.width = this.size.x;
    canvas1HtmlElement.height = this.size.y;
    canvas1HtmlElement.style.width = `${this.size.x * this.pixelSize}px`;
    canvas1HtmlElement.style.height = `${this.size.y * this.pixelSize}px`;

    const canvas2HtmlElement: HTMLCanvasElement = this.canvas2.nativeElement;
    this.context2 = canvas2HtmlElement.getContext('2d');

    canvas2HtmlElement.width = this.size.x;
    canvas2HtmlElement.height = this.size.y;
    canvas2HtmlElement.style.width = `${this.size.x * this.pixelSize}px`;
    canvas2HtmlElement.style.height = `${this.size.y * this.pixelSize}px`;

    canvas2HtmlElement.onmousedown = e => {
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

    canvas2HtmlElement.onmousemove = e => {
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

    canvas2HtmlElement.onmouseup = e => {

      //if (e.buttons != 1)
      //  return;
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

  public DrawCanvas(imageData: ImageData, cutPasteData: CutPasteData, lassoList: XY[]): void {

    this.context1.clearRect(0, 0, this.size.x, this.size.y);
    this.context2.clearRect(0, 0, this.size.x, this.size.y);

    this.context1.putImageData(imageData, 0, 0);


    this.context2.fillStyle = "rgba(0, 255, 0, 0.3)";
    cutPasteData.pixelList.forEach(p => {
      this.context2.fillRect(p.x, p.y, 1, 1);
    });

    if (!(cutPasteData.shift.x == 0 && cutPasteData.shift.y == 0)
      && cutPasteData.pixelList.length > 0) {
      this.context2.fillStyle = "rgba(0, 0, 255, 0.3)";
      cutPasteData.pixelList.forEach(p => {
        this.context2.fillRect(p.x + cutPasteData.shift.x, p.y + cutPasteData.shift.y, 1, 1);
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
    .stroke();*/
    }

    this.renderLasso(lassoList);

    //this.renderLasso2(this.context2, lassoList);
  }

  renderLasso2(ctx, points) {
    if (points.length <= 1) {
      return;
    }

    ctx.setLineDash([5, 3]);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (var index = 0; index < points.length; index++) {
      var point = points[index];
      if (index == 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    }

    //ctx.lineTo(start.x, start.y);
    ctx.lineTo(points[0].x, points[0].y);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  renderLasso(lassoList) {
    this.context2.fillStyle = "rgba(255, 0, 0, 0.3)";
    lassoList.forEach(p => {
      this.context2.fillRect(p.x, p.y, 1, 1);
    });
  }

}
