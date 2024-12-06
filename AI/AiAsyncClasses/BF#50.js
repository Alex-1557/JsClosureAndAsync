//5. Combining Async/Await and Error Handling:

class API {
  async makeRequest(url) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error.message); // Handle error here.
      throw error; // Re-throw to handle error at call site if necessary.
    }
  }
}

const api = new API();

async function apiCall() {
  try {
    const result = await api.makeRequest('/data');
    console.log('Data from API:', result);
  } catch (err) {
    console.error('Caught at call site:', err);
  }
}

apiCall();
