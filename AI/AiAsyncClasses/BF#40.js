//4. Event Emitters (using Node.js EventEmitter):

import { EventEmitter } from 'events';

class AsyncOperation extends EventEmitter {
  constructor() {
    super();
  }

  start(value) {
    setTimeout(() => {
      const result = value * 2;

      this.emit('complete', result); // Emit 'complete' with data.
      // Or, in case of an error:
      // this.emit('error', "Operation failed");
    }, 1000);
  }
}

const operation = new AsyncOperation();
operation.on('complete', (data) => {
  console.log('Operation completed with:', data);
});

operation.on('error', (err) => {
  console.error('Error:', err);
});

operation.start(5);
