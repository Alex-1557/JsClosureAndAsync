//4. Creating a reusable event emitter (using a class):

class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  on(event, listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  emit(event, ...args) {
    if (this.listeners[event]) {
      this.listeners[event].forEach((listener) => listener(...args));
    }
  }

  // Optionally add off() (removeEventListener) functionality.
}

const myEmitter = new EventEmitter();
myEmitter.on('my_event', (data) => {
  console.log('Event data:', data);
});

myEmitter.emit('my_event', 'test');
