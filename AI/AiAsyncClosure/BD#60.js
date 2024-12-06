//6. Creating Private Variables with Closures (not directly async, but can be used in async contexts):

function createCounter() {
  let count = 0; // Private variable due to closure

  return {
    increment: () => {
      count++;
    },
    getValue: () => count,
  };
}

const counter = createCounter();
counter.increment();

setTimeout(() => {
  // Can be used with async operations.
  counter.increment();
  console.log(counter.getValue()); // Output: 2
}, 1000);
