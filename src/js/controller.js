import { AddCanvas, animate } from './view/canvas';
import { addClickListeners, data as viewData } from './view/view';

function controlAddShape() {}

//init fn
function init() {
    AddCanvas();
    addClickListeners();
    // animate()
}

init();
