//1. Basic Asynchronous Operation:

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('myEvent', (data) => {
  // Simulate an asynchronous operation (e.g., a network request)
  setTimeout(() => {
    console.log('Asynchronous operation complete:', data);
  }, 1000);
});

myEmitter.emit('myEvent', 'Some data');
console.log('Event emitted'); // This will log *before* the asynchronous operation completes
