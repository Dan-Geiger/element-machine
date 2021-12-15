import * as canvas from "./view/canvas.js";

const canvasEl = document.getElementById("canvas1");
const ctx = canvasEl.getContext("2d");
const wrapperEl = document.querySelector(".wrapper__all");

let data = {
    clickCounter: 0,
    clickedPoint: "",
    continuosPoint: "",
    getDimentions: function () {
        return [
            this.continuosPoint[0] - this.clickedPoint[0],
            this.continuosPoint[1] - this.clickedPoint[1],
        ];
    },
};

function shapeController() {
    if (data.clickedPoint !== "") {
        canvas.updateSize();
        canvas.drew(data.clickedPoint, data.getDimentions());
    }
}

//adjasting canvas to window resize
window.addEventListener("resize", () => {
    shapeController();
});

// //continuous mouse position
canvasEl.addEventListener("mousemove", (e) => {
    // data.continuosPoint = [e.pageX, e.pageY];
    // data.continuosPoint = [e.screenX, e.screenY];
    data.continuosPoint = [
        e.clientX - canvas.getCanvasOffset()[0],
        e.clientY - canvas.getCanvasOffset()[1],
    ];

    document.querySelector(".mouse-pos--x").textContent =
        data.continuosPoint[0];
    document.querySelector(".mouse-pos--y").textContent =
        data.continuosPoint[1];
    shapeController();
});

//clicked mouse position
canvasEl.addEventListener("click", (e) => {
    //record points clicked
    // data.clickedPoint = [e.pageX, e.pageY];
    // data.clickedPoint = [e.screenX, e.screenY];
    data.clickedPoint = [
        e.clientX - canvas.getCanvasOffset()[0],
        e.clientY - canvas.getCanvasOffset()[1],
    ];

    document.querySelector(".mouse-click").textContent = data.continuosPoint;
    console.log(canvas.getCanvasOffset()[0]);
    console.log(data.clickedPoint);

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
