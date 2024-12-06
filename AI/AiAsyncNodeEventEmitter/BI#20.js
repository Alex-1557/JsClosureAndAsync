//2. Handling Multiple Asynchronous Operations with Callbacks:

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

function asyncOperation(data, callback) {
  setTimeout(() => {
    callback(null, data.toUpperCase()); // Simulate successful operation
  }, 1500);
}

myEmitter.on('process', (data) => {
  asyncOperation(data, (err, result) => {
    if (err) {
      myEmitter.emit('error', err); // Emit an error event if the operation fails
    } else {
      myEmitter.emit('processed', result);
    }
  });
});

myEmitter.on('processed', (result) => {
  console.log('Data processed:', result);
});

myEmitter.on('error', (err) => {
  console.error('An error occurred:', err);
});

myEmitter.emit('process', 'some data to process');
console.log('Event emitted for processing');
