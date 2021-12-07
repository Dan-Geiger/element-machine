/** @type {CanvasRenderingContext2D} */
//canvas init
const elDesk = document.querySelector('.desk__container');
export const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = elDesk.offsetWidth;
canvas.height = elDesk.offsetHeight;

export function AddCanvas() {
    //canvas resizing
    window.addEventListener('resize', () => {
        canvas.width = elDesk.offsetWidth;
        canvas.height = elDesk.offsetHeight;
    });

    animate([lineCircle, boundingBox, house]);
}

const animate = function (arrOfFn) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    arrOfFn.forEach((e) => {
        e();
    });
    requestAnimationFrame(() => animate(arrOfFn));
};

function boundingBox() {
    let startPoint = [375, 140];
    let dimentions = [450, 450];
    //ctx.arc(x, y, radius, startAngle, endAngle [, counterclockwise]);
    ctx.fillStyle = 'grey';
    ctx.strokeStyle = 'grey';
    ctx.beginPath();
    ctx.arc(startPoint[0], startPoint[1], 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(startPoint[0] + dimentions[0], startPoint[1], 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(startPoint[0] + dimentions[0], startPoint[1] + dimentions[1], 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(startPoint[0], startPoint[1] + dimentions[1], 5, 0, 2 * Math.PI);
    ctx.fill();
    //ctx.strokeRect(x, y, width, height);
    ctx.lineWidth = 1;
    ctx.strokeRect(startPoint[0], startPoint[1], dimentions[0], dimentions[1]);
}
function lineCircle() {
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
}
function house() {
    ctx.lineWidth = 10;
    // Wall
    ctx.strokeRect(75, 140, 150, 110);
    // Door
    ctx.fillRect(130, 190, 40, 60);
    // Roof
    ctx.beginPath();
    ctx.moveTo(50, 140);
    ctx.lineTo(150, 60);
    ctx.lineTo(250, 140);
    ctx.closePath();
    ctx.stroke();
}
