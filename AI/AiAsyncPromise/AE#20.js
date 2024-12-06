//Chaining Promises:
function fetchData() {
  return fetch('data.json').then((response) => response.json());
}

function processData(data) {
  // ...process data...
  return new Promise((resolve) => {
    // Return a new promise for further chaining if needed
    setTimeout(() => resolve('Data processed'), 500);
  });
}

fetchData()
  .then(processData)
  .then((result) => console.log(result))
  .catch((error) => console.error('Error:', error));
