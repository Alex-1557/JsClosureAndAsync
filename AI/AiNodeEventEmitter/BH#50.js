//5. Extending EventEmitter in a Class (for custom event handling):

class DataManager extends EventEmitter {
  constructor() {
    super();
  }

  saveData(data) {
    // ... save logic ... (simulate asynchronous save).
    setTimeout(() => {
      this.emit('save', data); // Emit event after save is done
    }, 500);
  }
}

const dataManager = new DataManager();

dataManager.on('save', (savedData) => {
  console.log('Data saved:', savedData);
});

dataManager.saveData({ name: 'John Doe', age: 30 });
