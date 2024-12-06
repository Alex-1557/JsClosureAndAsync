//3. Simulating asynchronous processing with setTimeout and TypedArray:

function processData(arrayBuffer) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const typedArray = new Float32Array(arrayBuffer); // Simulate processing.
      for (let i = 0; i < typedArray.length; i++) {
        typedArray[i] *= 2;
      }
      resolve(typedArray);
    }, 1000); // Simulate 1-second delay
  });
}

const myBuffer = new ArrayBuffer(64);
processData(myBuffer).then((result) => {
  console.log('Processed TypedArray:', result);
});
