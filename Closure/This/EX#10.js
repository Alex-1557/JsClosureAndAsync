class Color {
    #values;
    constructor(r, g, b, a = 1) {
      this.#values = [r, g, b, a];
    }
    get alpha() {
      return this.#values[3];
    }
    set alpha(value) {
      if (value < 0 || value > 1) {
        throw new RangeError(
          "Alpha value must be between 0 and 1");
      }
      this.#values[3] = value;
    }
    toString() {
      return this.#values.join(", ");
    }
    static isValid(r, g, b, a){
      return  r >= 0 && r <= 255 && 
              g >= 0 && g <= 255 &&
              b >= 0 && b <= 255
    }
  }
 class ColorWithAlpha extends Color {
    #alpha;
    constructor(r, g, b, a) {
      super(r, g, b);
      this.#alpha = a;
    }
    static isValid(r, g, b, a) {
      return super
          .isValid(r, g, b) && a >= 0 && a <= 1;
    }
    get alpha() {
      return this.#alpha;
    }
    set alpha(value) {
      if (value < 0 || value > 1) {
        throw new RangeError(
          "Alpha value must be between 0 and 1");
      }
      this.#alpha = value;
    }
  }
  console.log(new Color(255, 0, 0).toString());
  const color = new ColorWithAlpha(200, 0, 0, 0.5);
  console.log(color.toString()); 
  console.log(ColorWithAlpha.isValid(255, 0, 0, 1))
  console.log(ColorWithAlpha.isValid(300, 0, 0, 1))
  console.log(ColorWithAlpha.isValid(255, 0, 0, -1))
  console.log(color instanceof Color); 
  console.log(color instanceof ColorWithAlpha);