//2. Adding content to the Shadow DOM:

// Create elements:
const title = document.createElement('h2');
title.textContent = 'My Web Component';

const paragraph = document.createElement('p');
paragraph.textContent = 'This content is inside the Shadow DOM.';

// Add content to the shadow root:
shadowRoot.appendChild(title);
shadowRoot.appendChild(paragraph);
