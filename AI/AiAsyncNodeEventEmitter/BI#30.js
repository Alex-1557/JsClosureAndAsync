//3. Using Promises with EventEmitter:

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

function asyncOperationWithPromise(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve(data.toLowerCase());
      } else {
        reject(new Error('Data is missing'));
      }
    }, 2000);
  });
}

myEmitter.on('startAsync', (data) => {
  asyncOperationWithPromise(data)
    .then((result) => {
      myEmitter.emit('asyncComplete', result);
    })
    .catch((err) => {
      myEmitter.emit('asyncError', err);
    });
});

myEmitter.on('asyncComplete', (result) => {
  console.log('Asynchronous operation with promise complete:', result);
});

myEmitter.on('asyncError', (err) => {
  console.error('Error in asynchronous operation:', err);
});

myEmitter.emit('startAsync', 'SOME DATA');
console.log('Started async operation with promise');
