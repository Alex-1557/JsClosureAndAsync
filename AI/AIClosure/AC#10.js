//1. Basic Closure:

function outerFunction() {
    let outerVar = "Hello";
  
    function innerFunction() {
      console.log(outerVar); // Accesses outerVar
    }
  
    return innerFunction;
  }
  
  let myClosure = outerFunction();
  myClosure(); // Output: Hello
  //Correct: innerFunction forms a closure. It "closes over" outerVar, even though outerFunction has finished.