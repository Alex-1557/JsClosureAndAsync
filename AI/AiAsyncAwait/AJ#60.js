//Returning Values from async Functions:
async function getValue() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return 'Async Value';
}

async function useValue() {
  const value = await getValue();
  console.log(value); // Output: "Async Value"
}

useValue();
