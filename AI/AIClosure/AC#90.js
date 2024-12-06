//9. Callback with Closure Data:
//Asynchronous Operations

function fetchData(url, callback) {
    // ... (simulated asynchronous fetch)
    setTimeout(function() {
      let data = "Data from " + url;
      callback(data); // Callback with closure data.
    }, 1000);
  }
  
  fetchData("mysite.com", function(data) {
    console.log(data); // Output: Data from mysite.com
  });
  //Correct: Closures provide context for callbacks.
  