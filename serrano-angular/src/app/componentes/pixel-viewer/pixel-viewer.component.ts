import { Component, Input, OnInit } from '@angular/core';
import { XY } from 'src/app/interfaces/data-types';
import { LogicService } from 'src/app/services/logic.service';

@Component({
  selector: 'app-pixel-viewer',
  templateUrl: './pixel-viewer.component.html',
  styleUrls: ['./pixel-viewer.component.scss']
})
export class PixelViewerComponent {

  @Input() position: XY;
  @Input() pixel: any;

  constructor() { }

  public getPixelStatus() {
    return LogicService.IsPixelAlive(this.pixel) ? "Alive" : "Dead";
  }
}
