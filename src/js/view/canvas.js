//canvas init
const elDesk = document.querySelector('.desk__container');
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = elDesk.offsetWidth;
canvas.height = elDesk.offsetHeight;

export function AddCanvas() {
    //canvas resizing
    window.addEventListener('resize', () => {
        canvas.width = elDesk.offsetWidth;
        canvas.height = elDesk.offsetHeight;
    });

    //canvas refresh
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //-------------------------------------------------------put the shapes here
        requestAnimationFrame(animate);
    }

    animate();
}
