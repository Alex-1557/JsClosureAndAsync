//5. Loop and Closure (Corrected with let):

for (let i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);
    }, 1000);
  } // Output: 0 1 2 (after a delay)
//  Correct: let has block scope, creating a new i for each iteration.