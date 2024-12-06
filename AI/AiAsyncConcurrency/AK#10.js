//Responsive UI during long operation:
function simulateLongTask() {
  return new Promise((resolve) => {
    console.time('Long Task'); // Start timer
    setTimeout(() => {
      console.timeEnd('Long Task'); // Stop timer (after 1 second)
      resolve();
    }, 1000);
  });
}

async function run() {
  console.log('Starting long task...');
  await simulateLongTask(); // Simulate a blocking operation
  console.log('Long task complete, UI remains responsive!'); // This executes after the long task

  // UI updates, event handling, etc. continue during the long task
}

run();
