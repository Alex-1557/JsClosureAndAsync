import {prototypes} from "./prototypes.js";
class Color {
    #values; 
    constructor(r, g, b) {
        this.#values = [r, g, b];
    }
    getRed() {
        return this.#values[0];
    }
    setRed(value) {
        this.#values[0] = value;
    }
}
const red = new Color(255, 0, 0);
console.log(red.getRed());

console.log('red', prototypes(red))
console.log('Color', prototypes(Color))
