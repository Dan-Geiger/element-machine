class ShapeCL {
    #parentElement = document.querySelector('.desk__main');
    #myElement = document.getElementById('my-element');

    getElementDimentions() {
        //element width and height
        return [this.#myElement.offsetWidth, this.#myElement.offsetHeight];
    }
    centerShape() {
        //center the element to the canvas
        this.#myElement.style.marginLeft = this.#parentElement.offsetWidth / 2 + 'px';
        this.#myElement.style.marginTop = this.#parentElement.offsetHeight / 2 + 'px';
    }
}

export default new ShapeCL();
