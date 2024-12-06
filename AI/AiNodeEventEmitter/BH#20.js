//2. Once Listener:

myEmitter.once('oneTimeEvent', () => {
  console.log('This will only be printed once');
});

myEmitter.emit('oneTimeEvent'); // Prints message.
myEmitter.emit('oneTimeEvent'); // Does nothing (listener removed)
