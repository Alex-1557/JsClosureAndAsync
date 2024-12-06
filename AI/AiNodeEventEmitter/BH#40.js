//4. Asynchronous Operations with Event Emitters:

class MyAsyncClass extends EventEmitter {
  constructor() {
    super(); // required!
  }

  asyncOperation() {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        this.emit('success', 'Operation succeeded!');
      } else {
        this.emit('error', new Error('Async operation failed'));
      }
    }, 1000);
  }
}

const myInstance = new MyAsyncClass();

myInstance.on('success', (message) => {
  console.log(message);
});

myInstance.on('error', (err) => {
  console.error('Error occurred!', err);
});

myInstance.asyncOperation();
