//2. Factory function returning a class with private data:

function createCounter(initialValue = 0) {
  let count = initialValue; // count is completely private

  return class {
    // Anonymous class

    increment() {
      count++;
    }

    getValue() {
      return count;
    }
  };
}

const Counter1 = createCounter(); // Counter1 class has its own private count
const Counter2 = createCounter(10); // Counter2 class has its own private count starting at 10.

const counter1 = new Counter1();
const counter2 = new Counter2();

counter1.increment();
counter2.increment();

console.log(counter1.getValue()); // 1
console.log(counter2.getValue()); // 11
