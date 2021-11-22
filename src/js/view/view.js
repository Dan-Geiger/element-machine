import { canvas } from "./canvas";

//Dom element selection
const select = {
    btnToggleView: document.querySelector(".btn__toggle-view"),
    elCodeContainer: document.querySelector(".output-code__container"),
    elCodeOutput: document.querySelectorAll(".output-code__output"),
    elDesk: document.querySelector(".desk__container"),
    elShapeType: document.getElementById("menu-shape"),
};

//----------------------view-------------------

export function addClickListeners() {
    //button listeners
    select.btnToggleView.addEventListener("click", () => {
        select.elCodeContainer.classList.toggle(
            "output-code__container--animation"
        );
        select.elCodeOutput.forEach((e) =>
            e.classList.toggle("output-code__output--animation")
        );
    });

    //continuous mouse position
    canvas.addEventListener("mousemove", (e) => {
        // data.continuousPoint = [e.pageX, e.pageY];
        document.querySelector(".mouse-pos--x").textContent = e.pageX; //for testing
        document.querySelector(".mouse-pos--y").textContent = e.pageY; //for testing
    });

    //clicked mouse position
    canvas.addEventListener("click", (e) => {
        //record points clicked
        if (data.currentPoint.length >= 1) data.currentPoint = [];
        data.currentPoint.push(e.pageX, e.pageY);
    });
}
