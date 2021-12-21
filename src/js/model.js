import * as canvas from './view/canvas.js';

export let data = {
    clickCounter: 0,
    clickedPoint: '',
    continuosPoint: '',
    getShapeDimentions: function () {
        return [this.continuosPoint[0] - this.clickedPoint[0], this.continuosPoint[1] - this.clickedPoint[1]];
    },
    getMousePosition: function (event) {
        return [
            event.clientX - canvas.getCanvasOffset().offSetLeft,
            event.clientY - canvas.getCanvasOffset().offSetTop,
        ];
    },
    setClickPoint: function (event) {
        this.clickedPoint = this.getMousePosition(event);
    },
    setContinuosPoint: function (event) {
        this.continuosPoint = this.getMousePosition(event);
    },
};
