//1. Simple calculation in a worker:

// main.js
const worker = new Worker('worker.js');

worker.postMessage({ num1: 10, num2: 5 }); // Send data to worker

worker.onmessage = (event) => {
  console.log('Result from worker:', event.data); // Receive result
};

// worker.js
onmessage = function (event) {
  const { num1, num2 } = event.data;
  const sum = num1 + num2;
  postMessage(sum); // Send the result back
};
