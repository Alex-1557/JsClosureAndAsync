//2. Async Method with Promise:

class DataProcessor {
  processData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate asynchronous processing
        const processed = data.toUpperCase();
        resolve(processed);

        // Or reject if an error
        // reject("Processing failed");
      }, 1000);
    });
  }
}

const processor = new DataProcessor();
processor
  .processData('some data')
  .then((result) => console.log(result))
  .catch((err) => console.error('Promise rejected:', err));
