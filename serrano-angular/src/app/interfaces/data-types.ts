import { GraphModel } from "@tensorflow/tfjs";

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
    state;
    size: XY;
}

export interface CutPasteData {
    pixelList: XY[];
    shift: XY;
    removeOrigin: boolean;
}