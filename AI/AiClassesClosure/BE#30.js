//3. Callbacks and event handlers within class methods:

class MyClass {
  constructor() {
    this.value = 0;
  }

  setupEventHandler() {
    const self = this; // Need to preserve 'this' in the callback context.

    document.addEventListener('click', function () {
      self.value++; // Correctly updates the instance variable
      console.log(this.value); // 'this' is incorrect here (refers to the global object).
      console.log(self.value); // Use self to refer to instance.
    });

    // Alternative without self: using arrow function

    document.addEventListener('click', () => {
      // Arrow function preserves this
      this.value++; // Works correctly
    });
  }
}

const instance = new MyClass();
instance.setupEventHandler();
// Click events now update the instance variable.
