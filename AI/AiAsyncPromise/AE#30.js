//Promise.all (Parallel Execution):
const promise1 = fetch('data1.json');
const promise2 = fetch('data2.json');

Promise.all([promise1, promise2])
  .then((responses) => {
    return Promise.all(responses.map((response) => response.json())); // Process JSON in parallel
  })
  .then((data) => {
    console.log('Data 1:', data[0]);
    console.log('Data 2:', data[1]);
  })
  .catch((error) => console.error('An error occurred:', error));
