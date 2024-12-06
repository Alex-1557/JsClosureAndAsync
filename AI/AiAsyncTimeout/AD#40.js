//setTimeout with 0 Delay:
console.log('First');
setTimeout(() => {
  console.log('Second (after minimal delay)');
}, 0);
console.log('Third');
//Even with a 0ms delay, the callback inside setTimeout will not execute immediately. It will be placed in the event queue and run after the current call stack is empty. The output will be "First", "Third", then "Second...", demonstrating how setTimeout defers execution.
