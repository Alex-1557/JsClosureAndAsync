//6. Making multiple DOM changes efficiently (using a DocumentFragment):

async function addManyElements(count) {
  const fragment = document.createDocumentFragment(); // Efficient DOM manipulation

  for (let i = 0; i < count; i++) {
    const newElement = document.createElement('div');
    newElement.textContent = `Element ${i + 1}`;
    fragment.appendChild(newElement);

    if (i % 100 === 0) {
      // Pause every 100 elements for a very short time
      await new Promise((resolve) => setTimeout(resolve, 1)); // Brief yield to let UI update
    }
  }

  document.getElementById('container').appendChild(fragment); // Add everything to DOM at once.
}

addManyElements(500);
