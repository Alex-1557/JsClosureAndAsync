//1. Private instance variables (data hiding):

class Counter {
  #count = 0; // Private class field

  increment() {
    this.#count++;
  }

  getValue() {
    return this.#count;
  }
}

const counter = new Counter();
counter.increment();
console.log(counter.getValue()); // Output: 1
// console.log(counter.#count); // Error: Private field '#count' must be declared in an enclosing class
// Direct access to #count is not allowed from outside the class
