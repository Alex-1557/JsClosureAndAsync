//6. Loop and Closure (Corrected with IIFE):

for (var i = 0; i < 3; i++) {
    (function(index) { // Immediately Invoked Function Expression (IIFE)
      setTimeout(function() {
        console.log(index);
      }, 1000);
    })(i);
  } // Output: 0 1 2 (after a delay)
  
 // Correct: IIFE creates a new scope for each iteration, preserving the value of i.