//Basic Timer:
setTimeout(() => {
  console.log('This will run after 1 second');
}, 1000); // 1000 milliseconds = 1 second
//This illustrates the fundamental use of setTimeout. The callback function is placed in the event queue and executed after the timer expires (approximately 1 second). The call stack is clear to process other events during this wait.
