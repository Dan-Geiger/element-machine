import * as canvas from "./view/canvas.js";

const canvasEl = document.getElementById("canvas1");
const ctx = canvasEl.getContext("2d");

let data = {
    clickCounter: 0,
    clickedPoint: [0, 0],
    continuosPoint: [0, 0],
};

function shapeController() {
    if (data.clickCounter > 0) {
        canvas.updateSize();
        canvas.drew(data.clickedPoint, data.continuosPoint);
    }
}

//adjasting canvas to window resize
window.addEventListener("resize", () => {
    shapeController();
});

// //continuous mouse position
canvasEl.addEventListener("mousemove", (e) => {
    data.continuosPoint = [e.pageX, e.pageY];
    shapeController();
    // document.querySelector(".mouse-pos--x").textContent = data.continuosPoint[0]; //for testing
    // document.querySelector(".mouse-pos--y").textContent = data.continuosPoint[1]; //for testing
});

//clicked mouse position
canvasEl.addEventListener("click", (e) => {
    //record points clicked
    data.clickedPoint = [e.pageX, e.pageY];
    data.clickCounter++;
    shapeController();
    // document.querySelector(".mouse-click").textContent = `x: ${data.clickedPoint[0]}, y: ${data.clickedPoint[1]}`; //for testing
});

// //button listeners
// select.btnToggleView.addEventListener('click', () => {
//     select.elCodeContainer.classList.toggle('output-code__container--animation');
//     select.elCodeOutput.forEach((e) => e.classList.toggle('output-code__output--animation'));
// });

//init fn
function init() {}

// init();
