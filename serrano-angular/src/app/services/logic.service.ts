import { Injectable } from '@angular/core';
import { ModelData, XY } from '../interfaces/data-types';
import * as tf from '@tensorflow/tfjs';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

  public static async InitModel(gridSize, url: string): Promise<ModelData> {

    const r = await fetch(url);
    const consts = this.ParseConsts(await r.json());

    const model: tf.GraphModel = await tf.loadGraphModel(url);
    Object.assign(model.weights, consts);
    const channelN = model.inputs[0].shape[3];


    const state = tf.variable(LogicService.GetInitState(gridSize, channelN));
    const size = { x: state.shape[1], y: state.shape[2] };

    return { model, state, size, channelN };
  }

  private static ParseConsts(model_graph) {
    const dtypes = {
      'DT_INT32': ['int32', 'intVal', Int32Array],
      'DT_FLOAT': ['float32', 'floatVal', Float32Array]
    };

    const consts = {};
    model_graph.modelTopology.node.filter(n => n.op == 'Const').forEach((node => {
      const v = node.attr.value.tensor;
      const [dtype, field, arrayType] = dtypes[v.dtype];
      if (!v.tensorShape.dim) {
        consts[node.name] = [tf.scalar(v[field][0], dtype)];
      } else {
        // if there is a 0-length dimension, the exported graph json lacks "size"
        const shape = v.tensorShape.dim.map(d => (!d.size) ? 0 : parseInt(d.size));
        let arr;
        if (v.tensorContent) {
          const data = atob(v.tensorContent);
          const buf = new Uint8Array(data.length);
          for (var i = 0; i < data.length; ++i) {
            buf[i] = data.charCodeAt(i);
          }
          arr = new arrayType(buf.buffer);
        } else {
          const size = shape.reduce((a, b) => a * b);
          arr = new arrayType(size);
          if (size) {
            arr.fill(v[field][0]);
          }
        }
        consts[node.name] = [tf.tensor(arr, shape, dtype)];
      }
    }));
    return consts;
  }

  public static GetInitState(gridSize, channelN: number) {
    return tf.tidy(() => {
      const seed = tf.tensor(new Array(channelN).fill(0).map((x, i) => i < 3 ? 0 : 1), [1, 1, 1, channelN]);
      const D2 = gridSize / 2;
      const a = seed.pad([[0, 0], [D2 - 1, D2], [D2 - 1, D2], [0, 0]]);
      return a;
    });
  }

  public static CopyPixel(originState: any, destState: any, orig: XY, dest: XY, removeOrig) {

    tf.tidy(() => {
      let temp = originState.slice([0, orig.y, orig.x, 0], [1, 1, 1, -1]);

      const x2 = originState.shape[2] - dest.x - temp.shape[2];
      const y2 = originState.shape[1] - dest.y - temp.shape[1];
      if (dest.x < 0 || x2 < 0 || dest.y < 0 || y2 < 0)
        return;
      const a = temp.pad([[0, 0], [dest.y, y2], [dest.x, x2], [0, 0]]);

      // ¿Esto añadiría la nueva célula de cero?
      this.removePixel(destState, dest);
      destState.assign(destState.add(a));

      if (removeOrig) {
        this.removePixel(originState, orig);
      }
    });
  }

  private static removePixel(state: any, pos: XY) {
    const rx = tf.range(0, state.shape[2]).sub(pos.x).square().expandDims(0);
    const ry = tf.range(0, state.shape[1]).sub(pos.y).square().expandDims(1);
    const mask = rx.add(ry).greaterEqual(1.0).expandDims(2);
    state.assign(state.mul(mask));
  }

  public static CopyPixelRange(modelData: ModelData, orig: XY, dest: XY, range: XY, removeOrig) {

    tf.tidy(() => {
      let temp = modelData.state.slice([0, orig.y, orig.x, 0], [1, range.x, range.y, -1]);

      const x2 = modelData.size.x - dest.x - temp.shape[2];
      const y2 = modelData.size.y - dest.y - temp.shape[1];
      if (dest.x < 0 || x2 < 0 || dest.y < 0 || y2 < 0)
        return;
      const a = temp.pad([[0, 0], [dest.y, y2], [dest.x, x2], [0, 0]]);
      modelData.state.assign(modelData.state.add(a));

      if (removeOrig) {
        /* Esto por alguna razón no funciona, así que hay que hacer bucle
        const rx = tf.logicalOr(
          tf.range(0, size.x).greaterEqual(size.x - (orig.x + size.x)),
          tf.range(0, size.x).less(size.x - orig.x)).expandDims(0);
        const ry = tf.logicalOr(
            tf.range(0, size.y).greaterEqual(size.y - (orig.y + size.y)),
            tf.range(0, size.y).less(size.y - orig.y)).expandDims(1);
        const mask = rx.add(ry).expandDims(2);
        state.assign(state.mul(mask));*/
        for (let i = 0; i < range.x; i++) {
          for (let j = 0; j < range.y; j++) {
            const rx2 = tf.range(0, modelData.size.x).sub(orig.x + i).square().expandDims(0);
            const ry2 = tf.range(0, modelData.size.y).sub(orig.y + j).square().expandDims(1);
            const mask2 = rx2.add(ry2).greaterEqual(1.0).expandDims(2);
            modelData.state.assign(modelData.state.mul(mask2));
          }
        }
      }
    });
  }

  public static Step(modelData: ModelData, fireRate: number) {
    tf.tidy(() => {
      modelData.state.assign(modelData.model.execute(
        {
          x: modelData.state, fire_rate: tf.tensor(fireRate),
          angle: tf.tensor(0.0), step_size: tf.tensor(1.0)
        }, ['Identity']));
    });
  }

  public static GetImageData(state: tf.Variable<tf.Rank>, size: XY, layer = -1) {
    let img = undefined;

    if (layer == -1) {
      const rgba = state.slice([0, 0, 0, 0], [-1, -1, -1, 4]);
      const a = state.slice([0, 0, 0, 3], [-1, -1, -1, 1]);
      img = tf.tensor(1.0).sub(a).add(rgba).mul(255);
    } else {
      let tempLayer = state.slice([0, 0, 0, layer], [-1, -1, -1, 1]);
      //console.log(tempLayer.shape);
      tempLayer = tf.tensor(1.0).sub(tempLayer);
      tempLayer = tempLayer.reshape([1, size.x, size.y]);
      const a = tf.tensor(new Array(size.x * size.y).fill(1), [1, size.x, size.y]);
      img = tempLayer.stack([tempLayer, tempLayer, a], 3);
      img = img.mul(255);
    }

    //debugger;
    const rgbaBytes = new Uint8ClampedArray(img.dataSync());
    return new ImageData(rgbaBytes, size.x, size.y);
  }

  public static PlantSeed(modelData: ModelData, pos: XY) {

    if (this.IsPixelAliveByModelAndPos(modelData, pos))
      return;

    tf.tidy(() => {
      const seed = tf.tensor(new Array(modelData.channelN).fill(0).map((x, i) => i < 3 ? 0 : 1), [1, 1, 1, modelData.channelN]);

      const x2 = modelData.size.x - pos.x - seed.shape[2];
      const y2 = modelData.size.y - pos.y - seed.shape[1];
      if (pos.x < 0 || x2 < 0 || pos.y < 0 || y2 < 0)
        return;

      const a = seed.pad([[0, 0], [pos.y, y2], [pos.x, x2], [0, 0]]);
      modelData.state.assign(modelData.state.add(a));
    });

  }

  public static Damage(modelData: ModelData, pos: XY, r) {
    tf.tidy(() => {
      const rx = tf.range(0, modelData.size.x).sub(pos.x).div(r).square().expandDims(0);
      const ry = tf.range(0, modelData.size.y).sub(pos.y).div(r).square().expandDims(1);
      const mask = rx.add(ry).greater(1.0).expandDims(2);
      modelData.state.assign(modelData.state.mul(mask));
    });
  }

  public static Write(modelData: ModelData, pos: XY, r: number, channel: number, value: number) {
    console.log("Write: pos: " + pos + " r: " + r + " channel: " + channel + " value: " + value);
    tf.tidy(() => {

      const rx = tf.range(0, modelData.size.x).sub(pos.x).div(r).square().expandDims(0);
      const ry = tf.range(0, modelData.size.y).sub(pos.y).div(r).square().expandDims(1);
      const mask1 = rx.add(ry).greater(1.0).expandDims(2).pad([[0, 0], [0, 0], [channel, 15 - channel]]);
      //const mask2 = rx.add(ry).less(1.0).where(true, value).expandDims(2).pad([[0, 0], [0, 0], [channel, 15 - channel]]);
      const mask2 = rx.add(ry).greater(1.0).expandDims(2).pad([[0, 0], [0, 0], [channel, 15 - channel]], 1);
      const newMask = tf.tensor(new Array(modelData.size.x * modelData.size.y * modelData.channelN).fill(value), [modelData.size.x, modelData.size.y, modelData.channelN]);
      //modelData.state.assign(modelData.state.mul(mask1));
      modelData.state.assign(modelData.state.where(mask2, newMask));
    });
  }

  public static DisposeModelData(modelData: ModelData) {
    if (modelData) {
      if (modelData.model) {
        modelData.model.dispose();
        modelData.model = undefined;
      }
      if (modelData.state) {
        modelData.state.dispose();
        modelData.state = undefined;
      }
    }
  }

  public static IsPixelAlive(pixel: any): boolean {
    return pixel.equal(0).all().dataSync() == 0;
  }
  public static IsPixelAliveByModelAndPos(modelData: ModelData, pos: XY): boolean {
    return this.IsPixelAlive(modelData.state.slice([0, pos.y, pos.x], [1, 1, 1]));
  }
}
