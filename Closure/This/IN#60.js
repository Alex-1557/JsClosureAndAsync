class Person {
  #age;                    
  constructor(age) {
     this.#age = age;
  }
  static isPerson(p) {
     return #age in p;
  }
  ageDifference(other) {
     return this.#age - other.#age;
  }
}

const p1 = new Person(20);
const p2 = new Person(30);
console.log(p1.ageDifference(p2)); 
console.log(Person.isPerson(p1)); 

if (Person.isPerson(p1) && 
    Person.isPerson(p2)) {
    console.log(
        p1.ageDifference(p2)); 
}