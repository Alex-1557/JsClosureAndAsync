//1. Basic Event Emission and Handling:

import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

// Listen for the 'event' event:
myEmitter.on('event', (data) => {
  console.log('An event occurred:', data);
});

// Emit the 'event' event:
myEmitter.emit('event', { message: 'Hello!' }); // Output: An event occurred: { message: 'Hello!' }

// Listen for event with multiple arguments:
myEmitter.on('anotherEvent', (arg1, arg2) => {
  console.log('Another event occurred:', arg1, arg2);
});

myEmitter.emit('anotherEvent', 123, 'abc'); // Output: Another event occurred: 123 abc
