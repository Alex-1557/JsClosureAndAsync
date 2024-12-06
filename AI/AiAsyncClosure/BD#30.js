//3. Asynchronous API Call with Callback and Closure:

function fetchData(url, callback) {
  setTimeout(() => {
    // Simulate asynchronous API call
    const data = { id: 1, name: 'test' };
    callback(data); // Pass data to the callback
  }, 1000);
}

function processData(url) {
  let processedData = null;

  fetchData(url, (data) => {
    // Callback retains access to processedData
    processedData = data.name.toUpperCase();
    console.log(processedData); // Use data inside callback
  });
}

processData('/some/url');
