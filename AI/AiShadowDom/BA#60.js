//5. Event Handling in Shadow DOM:

// Inside shadow DOM creation:
const button = document.createElement('button');
button.textContent = 'Shadow Button';
shadowRoot.appendChild(button);

button.addEventListener('click', () => {
  console.log('Shadow DOM button clicked!');
}); // Events work normally within the shadow DOM

// Listening to events from the Shadow DOM in the main document:
myElement.addEventListener(
  'click',
  (event) => {
    if (event.target === button) {
      // Check if the event originated from the Shadow DOM
      console.log('Shadow DOM button clicked (handled in main document)');
    }
  },
  { capture: true },
); // Use capture phase to handle events before Shadow DOM
