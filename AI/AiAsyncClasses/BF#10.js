//1. Async Method with await:

class DataManager {
  async fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throw for external handling.
    }
  }
}

const manager = new DataManager();
manager
  .fetchData('data.json')
  .then((data) => console.log(data))
  .catch((error) => console.error('Caught error:', error));
