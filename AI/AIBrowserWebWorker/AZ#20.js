//2. CPU-intensive task (e.g., prime number calculation):

// main.js
const worker = new Worker('worker.js');
worker.postMessage(10000); // Find primes up to this number

worker.onmessage = (event) => {
  console.log('Primes:', event.data); // Receive array of primes.
};

// worker.js (complex calculation here)
function findPrimes(limit) {
  /* implementation omitted */
}

onmessage = function (event) {
  const limit = event.data;
  const primes = findPrimes(limit);
  postMessage(primes);
};
