//2. Modifying Outer Variables:

function counter() {
    let count = 0;
    return function() {
      return ++count;
    }
  }
  
  let increment = counter();
  console.log(increment()); // Output: 1
  console.log(increment()); // Output: 2
  //Correct: The inner function modifies count in the outer scope, demonstrating stateful closures.
  