//Creating a Promise from an Existing Value:
const resolvedPromise = Promise.resolve('Immediate value');
resolvedPromise.then((value) => console.log(value)); // Output: "Immediate value"

const rejectedPromise = Promise.reject('Immediate error');
rejectedPromise.catch((error) => console.error(error)); // Output: "Immediate error"
