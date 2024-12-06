//Basic Promise Creation and Handling:
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation (e.g., API call, timer)
  setTimeout(() => {
    const success = true; // Simulate success or failure
    if (success) {
      resolve('Data fetched successfully!');
    } else {
      reject('Failed to fetch data.');
    }
  }, 1000);
});

myPromise
  .then((data) => {
    console.log(data); // Handle success
  })
  .catch((error) => {
    console.error(error); // Handle failure
  });
