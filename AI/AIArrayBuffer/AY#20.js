//2. Using ArrayBuffer with Web Workers (browser):

// Main thread:
const worker = new Worker('worker.js');

const myArrayBuffer = new ArrayBuffer(1024); // Example ArrayBuffer
worker.postMessage({ buffer: myArrayBuffer }, [myArrayBuffer]); // Transfer ownership (more efficient)

worker.onmessage = (event) => {
  console.log('Modified ArrayBuffer:', event.data.buffer); // Access result
};

// worker.js:

onmessage = function (event) {
  const receivedBuffer = event.data.buffer;
  const typedArray = new Int32Array(receivedBuffer); // Use a TypedArray in the worker.

  for (let i = 0; i < typedArray.length; i++) {
    typedArray[i] = i * 2; // Modify array data (in the worker thread).
  }

  postMessage({ buffer: receivedBuffer }, [receivedBuffer]); // Send back, transfer ownership
};
