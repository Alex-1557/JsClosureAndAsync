class Person1 {
  #age;
  constructor(age) {
    this.#age = age;
  }
  static [Symbol.hasInstance](p){
    return this === 
       Person1 && #age in p;
  }
  ageDifference(other) {
    return this.#age - other.#age;
  }
}
  
const p3 = new Person1(20);
const p4 = new Person1(30);
  
if (p3 instanceof Person1 && 
    p4 instanceof Person1) {
    console.log(
      p3.ageDifference(p4)); 
}
  