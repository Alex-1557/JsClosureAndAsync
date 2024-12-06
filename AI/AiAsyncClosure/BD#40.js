//4. Promise with Closure:

function delayedValue(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value * 2); // Closure over value
    }, delay);
  });
}

async function printValue() {
  const result = await delayedValue(10, 1000);
  console.log(result); // Output: 20
}

printValue();
