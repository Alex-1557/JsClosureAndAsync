class Something {
  #property;
  constructor() {
    this.#property = "test";
  }
  getProp (){
    return this.#property;
  }
}
console.log(
  Something.getProp)
console.log(
  (new Something).getProp())