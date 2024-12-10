//---  This point to global context in arrow function
const Add = (function () {
    let counter = 0;
    console.log(counter);
    return function () {
      counter += 1;
      return counter;
    };
  })();
console.log(
    Add(), Add(), Add());
