//5. async/await with Closure:

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function processItems(items) {
  for (let item of items) {
    await delay(1000); // Simulate processing time.
    console.log(item * 2); // Closure over items.
  }
}

processItems([1, 2, 3]);
