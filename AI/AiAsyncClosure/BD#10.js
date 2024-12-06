//1. setTimeout with Closure:

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // Correctly logs 0, 1, 2 (due to let)
  }, i * 1000);
}
