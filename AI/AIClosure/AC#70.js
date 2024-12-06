//7. Excessive Closure Use:

function unnecessaryClosure(x) {
    return function() {
      return x * 2;
    };
  }
  let double = unnecessaryClosure(5);
  console.log(double());  // Output: 10
  
  //Incorrect (stylistically): 
  //Overuse of closures can add complexity when not needed. A simple function function double(x) { return x * 2; } would suffice.