import { AddCanvas } from "./view/canvas";
import { addClickListeners } from "./view/view";

function controlAddShape() {
    console.log("ok");
}

//init fn
function init() {
    AddCanvas();
    addClickListeners();
}

init();
