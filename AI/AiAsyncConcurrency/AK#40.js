//Long-running calculations with Web Workers (True Parallelism):
// Main thread (main.js)

const worker = new Worker('worker.js');

worker.postMessage('Start calculation');

worker.onmessage = (event) => {
  console.log('Result from worker:', event.data);
};

// worker.js (separate file)

onmessage = (event) => {
  // Perform long calculation here
  const result = performComplexCalculation();
  postMessage(result); // Send result back to main thread
};
