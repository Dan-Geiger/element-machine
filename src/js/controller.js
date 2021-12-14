import * as canvas from './view/canvas.js';

const canvasEl = document.getElementById('canvas1');
const ctx = canvasEl.getContext('2d');

let data = {
    clickCounter: 0,
    clickedPoint: '',
    continuosPoint: '',
    getDimentions: function () {
        return [this.continuosPoint[0] - this.clickedPoint[0], this.continuosPoint[1] - this.clickedPoint[1]];
    },
};

function shapeController() {
    if (data.clickedPoint !== '') {
        canvas.updateSize();
        canvas.drew(data.clickedPoint, data.getDimentions());
    }
}

//adjasting canvas to window resize
window.addEventListener('resize', () => {
    shapeController();
});

// //continuous mouse position
canvasEl.addEventListener('mousemove', (e) => {
    data.continuosPoint = [e.pageX, e.pageY - 60];
    // data.continuosPoint = [e.screenX, e.screenY];

    shapeController();
});

//clicked mouse position
canvasEl.addEventListener('click', (e) => {
    //record points clicked
    data.clickedPoint = [e.pageX, e.pageY - 60];
    // data.clickedPoint = [e.screenX, e.screenY];
    // data.clickedPoint = [e.clientX, e.clientY];

    // data.clickCounter++;
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
