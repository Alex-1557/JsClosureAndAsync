//Error Handling in async Functions:
async function mightThrowError() {
  if (Math.random() < 0.5) {
    throw new Error('Simulated error!');
  }
  return 'Success!';
}

async function handleError() {
  try {
    const result = await mightThrowError();
    console.log(result);
  } catch (error) {
    console.error('Caught error:', error);
  }
}

handleError();
