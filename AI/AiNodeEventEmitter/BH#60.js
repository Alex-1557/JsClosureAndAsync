//6. Removing Listeners:

// Method 1. Named function

function myListener(data) {
  console.log('listener 1:', data);
}

myEmitter.on('someEvent', myListener);
myEmitter.emit('someEvent', 'test');

myEmitter.removeListener('someEvent', myListener); // Remove specific listener.
// OR myEmitter.off('someEvent', myListener); // removeListener and off are aliases.

myEmitter.emit('someEvent', 'test2'); // Listener 1 will not be called.

//Method 2: Anonymous Listener

const listener2 = myEmitter.on('someEvent', (data) => {
  console.log('listener 2:', data);
});

myEmitter.emit('someEvent', 'test3'); // Listener 2 will be called

myEmitter.off('someEvent', listener2); // Need to keep the returned function to remove.

myEmitter.emit('someEvent', 'test4'); // listener2 is not called.

// Remove all Listeners for an event:
myEmitter.removeAllListeners('someEvent');

// Or all listeners for all events:
// myEmitter.removeAllListeners();
