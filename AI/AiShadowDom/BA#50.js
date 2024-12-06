//4. Manipulating the Shadow DOM (Asynchronously):

async function updateShadowDOM() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate an async operation

  // Accessing elements within the Shadow DOM (if open mode):
  const shadowParagraph = shadowRoot.querySelector('p');
  shadowParagraph.textContent = 'Updated content!';

  // Adding new elements asynchronously:
  const newDiv = document.createElement('div');
  newDiv.textContent = 'Asynchronously added element';
  shadowRoot.appendChild(newDiv); // Append directly to the shadow root
}

updateShadowDOM();
