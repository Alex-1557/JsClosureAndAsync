for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); // Outputs 0, 1, 2, 3, 4 correctly
  }, i * 1000);
}
//Clearing Timeouts:
const timeoutId = setTimeout(() => {
  console.log('This will not run!');
}, 2000);

clearTimeout(timeoutId); // Cancels the timeout
//clearTimeout allows you to cancel a pending timeout using the ID returned by setTimeout.
