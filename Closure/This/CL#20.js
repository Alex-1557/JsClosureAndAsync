class Color1 {
    constructor(r, g, b) {
        this.values = [r, g, b];
    }
    get red() {
        return this.values[0];
    }
    set red(value) {
        this.values[0] = value;
    }
}
const red1 = new Color1(255, 0, 0);
red1.red = 0;
console.log(red1.red); 