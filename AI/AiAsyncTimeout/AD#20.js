//Closure over Loop Variable:
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); // Outputs 5 five times
  }, i * 1000);
}
//This classic example demonstrates a common pitfall. Due to var's function scope (not block scope), the i variable is not captured for each iteration within the loop. By the time the setTimeout callbacks execute, i has already reached its final value (5). Using let instead of var solves this, providing proper closure over the loop variable:
