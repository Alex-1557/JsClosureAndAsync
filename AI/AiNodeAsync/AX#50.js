//5. Worker Threads (for CPU-Intensive Tasks):

// main.js
import { Worker } from 'worker_threads';

const worker = new Worker('./worker.js', { workerData: { value: 10 } }); // Send data

worker.on('message', (result) => {
  console.log(`Result from worker: ${result}`); // Receive result back in the main thread
});

worker.on('error', (error) => {
  console.error(`Worker error: ${error}`);
});

worker.on('exit', (code) => {
  console.log(`Worker exited with code ${code}`);
});

// worker.js (separate file):

import { parentPort, workerData } from 'worker_threads';

// Receive data from main thread
const { value } = workerData;

// Perform CPU-intensive task
const result = performComplexCalculation(value); // Example function

parentPort.postMessage(result); // Send result back to main thread
