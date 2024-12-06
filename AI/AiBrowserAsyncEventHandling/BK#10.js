//Asynchronous operation inside an event handler:

element.addEventListener('click', async (event) => {
  console.log('Click registered!'); // synchronous
  const result = await someAsyncFunction(); // asynchronous operation inside event handler.
  console.log('Async operation complete:', result);
  // Update the UI or do other things with the result
});

async function someAsyncFunction() {
  await delay(1000); // Network fetch, other async operations.
  return 'Async result';
}

function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
