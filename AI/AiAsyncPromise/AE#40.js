//Promise.race (First Resolved/Rejected):
const fastPromise = new Promise((resolve) =>
  setTimeout(() => resolve('Fast'), 500),
);
const slowPromise = new Promise((resolve) =>
  setTimeout(() => resolve('Slow'), 2000),
);

Promise.race([fastPromise, slowPromise]).then((result) => console.log(result)); // Output: "Fast"
