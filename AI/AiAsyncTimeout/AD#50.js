//setTimeout and Recursion (Simulating Intervals):
function repeat(delay) {
  console.log('Repeating...');
  setTimeout(() => {
    repeat(delay); // Recursive call schedules the next execution
  }, delay);
}

repeat(1000); // Repeat every second
