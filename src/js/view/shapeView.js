class view {
    constructor(width, height, text) {
        this.width = width;
        this.height = height;
        this.text = text;
    }

    _parentElement = document.getElementById('my-element');

    getElementDimentions() {
        return [this._parentElement.offsetWidth, this._parentElement.offsetHeight];
    }
    centerShape(data) {
        //center the element to the canvas
    }
}
