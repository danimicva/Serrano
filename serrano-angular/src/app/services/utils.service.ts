import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {


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
  isPixelInLasso(lassoList, x, y) {

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
  }


}
