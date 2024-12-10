class ClassWithPrivateField {
  #privateField;
  constructor() {
    this.#privateField = 42;
  }
  get getPrivateField() {
    return `${this.#privateField}🛑`;
  }
}
class Subclass extends ClassWithPrivateField {
  #subPrivateField;
  constructor() {
    super();
    this.#subPrivateField = 23;
  }
  get getSubPrivateField() {
    return `${this.#subPrivateField}🎬`;
  }
}
const S = new Subclass();
console.log(
    S.getPrivateField, S.getSubPrivateField);
