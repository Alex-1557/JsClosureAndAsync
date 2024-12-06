//5. Polling an external API:

// main.js
const worker = new Worker('worker.js');
worker.postMessage('start'); // Tell the worker to start.

worker.onmessage = (event) => {
  // Display updated data or perform other actions
  console.log('Data from server:', event.data);
};

// worker.js (separate file)

onmessage = () => {
  setInterval(async () => {
    // Poll API every 5 seconds
    try {
      const response = await fetch('/api/data'); // Fetch or use other means.
      const data = await response.json();
      postMessage(data); // Send to main thread.
    } catch (error) {
      console.error('Fetch error:', error); // Handle errors internally
      // Optionally send error message back to main thread.
    }
  }, 5000);
};
