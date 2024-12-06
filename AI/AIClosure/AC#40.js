//4. Loop and Closure (Common Pitfall):

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);
    }, 1000);
  } // Output: 3 3 3 (after a delay)
//  Incorrect: var has function scope, so i is 3 by the time the setTimeout callbacks execute.