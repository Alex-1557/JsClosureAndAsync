//8. Partial Application (Useful):
//Currying and Partial Application

function add(x) {
    return function(y) {
      return x + y;
    };
  }
  
  let add5 = add(5);
  console.log(add5(3)); // Output: 8
 // Correct: Partial application using closures creates specialized functions.