import { data } from "./model";
import ShapeCL from "./view/shapeView.js";

const styleSheetEl = document.getElementById("style-sheet");
const btnDarkMode = document.getElementById("dark-theme");

btnDarkMode.addEventListener("click", () => {
    styleSheetEl.setAttribute("href", "src/sass/mainDark.scss");
});

const canvasEl = document.getElementById("canvas1");

// function shapeController() {
//     console.log("shapeController call");
// }
// //adjasting to window resize
// window.addEventListener("resize", () => {
//     shapeController();
// });

function init() {
    ShapeCL.addInputListeners();
    ShapeCL.updateMyElement();
}

init();
