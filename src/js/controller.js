import * as canvas from './view/canvas.js';

const canvasEl = document.getElementById('canvas1');

let data = {
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

function shapeController() {
    if (data.clickedPoint !== '') {
        canvas.updateSize();
        canvas.drewBoundingBox(data.clickedPoint, data.getShapeDimentions());
    }
}

//adjasting canvas to window resize
window.addEventListener('resize', () => {
    shapeController();
});

//clicked mouse position
canvasEl.addEventListener('click', (e) => {
    //record points clicked
    data.setClickPoint(e);

    shapeController();
});

// //continuous mouse position
canvasEl.addEventListener('mousemove', (e) => {
    data.setContinuosPoint(e);

    shapeController();
});

// //button listeners
// select.btnToggleView.addEventListener('click', () => {
//     select.elCodeContainer.classList.toggle('output-code__container--animation');
//     select.elCodeOutput.forEach((e) => e.classList.toggle('output-code__output--animation'));
// });

//init fn
function init() {}

// init();
