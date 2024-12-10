const Add = (function () {
  let counter = 0;
  return function () {
    console.log(counter);
    counter += 1;
    return counter;
  };
})();
console.log(
    Add(), Add(), Add());
