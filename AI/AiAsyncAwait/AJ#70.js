//Async Functions and Loops:
async function processItems(items) {
  for (const item of items) {
    // Process items sequentially
    try {
      const result = await processItem(item);
      console.log(result);
    } catch (error) {
      console.error(`Error processing item ${item}:`, error);
    }
  }
}

async function processItem(item) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return `Processed ${item}`;
}

processItems([1, 2, 3]);
