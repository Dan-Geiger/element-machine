import { hexToRGB } from "../helper";

const inputArr = Array.from(document.querySelectorAll(".input"));

class ShapeCL {
    #parentElement = document.querySelector(".desk__main");
    #myElement = document.getElementById("my-element");
    #myElementText = document.getElementById("my-element__text");

    #inputData = {
        fontSize: 2,
        padding: 2,
        color: "#000",
        textalign: true,
        textTransform: false,

        backgroundColorCeck: true,
        backgroundColor: "#fcba03",

        borderRadiusCheck: true,
        borderRadius: 0,

        border: true,
        borderAll: true,
        borderSeparate: false,
        borderWidth: 0.5,
        borderType: "solid",
        borderColor: "#000",

        boxShadow: true,
        boxShadowOffsetXSlider: 0,
        boxShadowOffsetX: 0,
        boxShadowOffsetYSlider: 0.5,
        boxShadowOffsetY: 0.5,
        boxShadowBlurSlider: 1,
        boxShadowBlur: 1,
        boxShadowSpreadSlider: 0,
        boxShadowSpread: 1,
        boxShadowColor: "#000",
        boxShadowAlphaSlider: 0.5,
        boxShadowAlpha: 0.5,
    };

    #inputDataPropArr() {
        let propArr = [];
        for (let prop in this.#inputData) {
            propArr.push(prop);
        }
        return propArr;
    }

    getElementDimentions() {
        //element width and height
        return [this.#myElement.offsetWidth, this.#myElement.offsetHeight];
    }

    centerShape() {
        //center the element to the canvas
        this.#myElement.style.marginLeft = this.#parentElement.offsetWidth / 2 + "px";
        this.#myElement.style.marginTop = this.#parentElement.offsetHeight / 2 + "px";
    }

    addInputListeners() {
        inputArr.forEach((el, i) => {
            if (el.type === "radio" || el.type === "checkbox") {
                el.addEventListener("input", (e) => {
                    this.#setDataProperty(el.checked, i);
                    // console.log(el.type, el.checked, i, "checked");
                    this.updateMyElement();
                });
            } else {
                el.addEventListener("input", (e) => {
                    this.#setDataProperty(el.value, i);
                    // console.log(el.type, el.value, i, "value");
                    this.updateMyElement();
                });
            }
        });

        console.log("Listeners added");
        // console.log(Object.values(this.#inputData)[0]);
        // console.log(this.#inputDataPropArr());
    }
    test() {
        // this.#myElement.addEventListener("click", (e) => {
        //     console.log("bouble", e);
        // });
        this.#myElementText.textContent = "WTF";
        console.log("teste ren");
    }

    #setDataProperty(value, index) {
        this.#inputData[this.#inputDataPropArr()[index]] = value;
    }

    updateMyElement() {
        this.#clear();
        this.#parentElement.insertAdjacentHTML("afterbegin", this.#generateElementStyle());
        this.test();
    }

    #clear() {
        this.#parentElement.innerHTML = "";
    }

    #generateElementStyle() {
        return `
        <style>
            .my-element {
                font-size: ${this.#inputData.fontSize}rem;
                padding: ${this.#inputData.padding}rem;
                color: ${this.#inputData.color};
                text-align: ${this.#inputData.textalign};
                text-transform: ${this.#inputData.textTransform == true ? "uppercase" : "lowercase"};

                background-color: ${this.#inputData.backgroundColor};

                border-radius: ${this.#inputData.borderRadius}rem;

                border: ${this.#inputData.borderWidth}rem 
                ${this.#inputData.borderType} 
                ${this.#inputData.borderColor};

                box-shadow: ${this.#inputData.boxShadowOffsetXSlider}rem 
                ${this.#inputData.boxShadowOffsetYSlider}rem 
                ${this.#inputData.boxShadowBlurSlider}rem 
                ${this.#inputData.boxShadowSpreadSlider}rem 
                rgba(${hexToRGB(this.#inputData.boxShadowColor)},${this.#inputData.boxShadowAlphaSlider});
            }
            .my-element__text::selection{
                color: gold;
                background-color: red;
            }
        </style>
        <div class="my-element" id="my-element">
            <input type="text" class="input-element-text" />
            <div class="my-element__text">My element</div>
        </div>`;
    }
}

export default new ShapeCL();

// (() => {
//     const select = inputArr.filter((cur) => cur.name == "text size");
//     console.dir(select.value);
//     console.log(inputArr);
// })();
