//1. Updating text content after a delay:

async function updateText() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
  document.getElementById('myElement').textContent = 'Text updated!';
}

updateText();
