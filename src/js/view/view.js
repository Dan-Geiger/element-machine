import { canvas } from './canvas';

//Dom element selection
const select = {
    btnToggleView: document.querySelector('.btn__toggle-view'),
    elCodeContainer: document.querySelector('.output-code__container'),
    elCodeOutput: document.querySelectorAll('.output-code__output'),
    elDesk: document.querySelector('.desk__container'),
    elShapeType: document.getElementById('menu-shape'),
};
//-----------------------data export------------------
export let data = {
    clickedPoint: [],
    continuosPoint: [],
};

//----------------------view-------------------

export function addClickListeners() {
    //button listeners
    select.btnToggleView.addEventListener('click', () => {
        select.elCodeContainer.classList.toggle('output-code__container--animation');
        select.elCodeOutput.forEach((e) => e.classList.toggle('output-code__output--animation'));
    });

    //continuous mouse position
    canvas.addEventListener('mousemove', (e) => {
        data.continuosPoint = [e.pageX, e.pageY];

        document.querySelector('.mouse-pos--x').textContent = data.continuosPoint[0]; //for testing
        document.querySelector('.mouse-pos--y').textContent = data.continuosPoint[1]; //for testing
    });

    //clicked mouse position
    canvas.addEventListener('click', (e) => {
        //record points clicked
        data.clickedPoint = [e.pageX, e.pageY];
        document.querySelector('.mouse-click').textContent = `x: ${data.clickedPoint[0]}, y: ${data.clickedPoint[1]}`; //for testing
    });
}
