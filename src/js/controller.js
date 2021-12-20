import * as canvas from './view/canvas.js';
import { data } from './model';

const canvasEl = document.getElementById('canvas1');

function shapeController() {}

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
