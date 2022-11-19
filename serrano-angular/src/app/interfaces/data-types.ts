import { GraphModel } from "@tensorflow/tfjs";
import * as tf from '@tensorflow/tfjs';

export interface XY {
    x: number;
    y: number;
}

export enum MyMouseEventType {
    MouseUp,
    MouseDown,
    MouseMove
};

export interface MyMouseEvent {
    pos: XY;
    type: MyMouseEventType;
    shiftKey: boolean;
    ctrlKey: boolean;
};

export interface ModelData {
    model: GraphModel;
    //state: tf.Variable<tf.Rank>;
    state;
    size: XY;
    channelN: number;
}

export interface CutPasteData {
    state: tf.Variable<tf.Rank>;
    pixelList: XY[];
    shift: XY;
    removeOrigin: boolean;
}

export interface ClipboardData {
    state: tf.Variable<tf.Rank>;
    pixelList: XY[];
}