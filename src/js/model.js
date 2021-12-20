//----------------------model-------------------

class Shape {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.clickPoints = [];
        this.editMode = true;
    }
    boundingBox() {}
}
