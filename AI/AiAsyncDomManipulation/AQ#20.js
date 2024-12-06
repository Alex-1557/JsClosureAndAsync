//2. Adding elements dynamically after fetching data:

async function addItems(items) {
  const container = document.getElementById('container');

  for (const item of items) {
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate fetching each item

    const newElement = document.createElement('div');
    newElement.textContent = item.name; // Add item.name dynamically.
    container.appendChild(newElement);
  }
}

const items = [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }];

addItems(items);
