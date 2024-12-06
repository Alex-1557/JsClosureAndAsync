//3. Timers (Asynchronous):

console.log('Starting');

setTimeout(() => {
  console.log('Delayed execution'); // Runs after 2 seconds.
}, 2000);

console.log('Continuing'); // This will print before the "Delayed execution."

setInterval(() => {
  console.log('Repeating every second');
}, 1000);

// To stop the interval:
// const intervalId = setInterval(...);
// clearInterval(intervalId);
