//4. Handling large datasets (arrays):

// main.js

const worker = new Worker('worker.js');

const largeArray = Array.from({ length: 1000000 }, (_, i) => i); // Example
worker.postMessage(largeArray);

// ...

// worker.js
onmessage = function (event) {
  const data = event.data; // Large dataset
  // ... Process data (e.g. find min, max, averages) ...
  const min = Math.min(...data);
  const max = Math.max(...data);
  postMessage({ min, max }); // return result
};
