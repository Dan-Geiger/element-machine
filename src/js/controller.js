import { data } from "./model";
import ShapeCL from "./view/shapeView.js";

const canvasEl = document.getElementById("canvas1");

function shapeController() {
    console.log("shapeController call");
}
//adjasting to window resize
window.addEventListener("resize", () => {
    shapeController();
});

function init() {
    ShapeCL.addInputListeners();
    ShapeCL.updateMyElement();
}

init();
