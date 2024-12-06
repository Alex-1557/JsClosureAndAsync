//5. Updating DOM based on user interaction (non-blocking):

const button = document.getElementById('myButton');
const content = document.getElementById('content');

button.addEventListener('click', async () => {
  content.textContent = 'Loading...'; // Update immediately
  const data = await fetchDataFromServer(); // Simulate fetching data (async operation)
  content.textContent = data; // Update after data is received
});

async function fetchDataFromServer() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
  return 'Data from server';
}
