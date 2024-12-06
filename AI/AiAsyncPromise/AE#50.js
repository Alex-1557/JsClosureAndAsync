//Error Handling in Chains:
function step1() {
  return new Promise((resolve, reject) => {
    // ...some code that might throw an error...
    reject('Error in step 1');
  });
}

function step2() {
  return Promise.resolve('Step 2 completed'); // Simulate success
}

step1()
  .then(step2)
  .then((result) => console.log(result))
  .catch((error) => console.error('Caught error:', error)); // Handles error from step1
