//4. Asynchronous operations and preserving this:

class DataManager {
  constructor() {
    this.data = null;
  }

  async fetchData(url) {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();

      this.data = jsonData; // Correctly updates instance data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}

const manager = new DataManager();
manager.fetchData('data.json').then(() => {
  console.log(manager.data); // 'this' context was preserved.
});
