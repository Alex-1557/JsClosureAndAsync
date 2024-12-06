//3. Image manipulation (using a library like Canvas API in worker):

// main.js
const worker = new Worker('worker.js');

const canvas = document.getElementById('myCanvas');
const imageData = canvas
  .getContext('2d')
  .getImageData(0, 0, canvas.width, canvas.height);

worker.postMessage(imageData); // Send image data (requires transferrable objects or structured cloning).

// ...

// worker.js
// Assume image manipulation library included in the worker.

onmessage = function (event) {
  const imageData = event.data;
  // ... perform image manipulation on imageData ...

  postMessage(imageData); // Send back (transferrable).
};
