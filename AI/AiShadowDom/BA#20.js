//1. Creating a Shadow Root:

const myElement = document.querySelector('#my-element');
const shadowRoot = myElement.attachShadow({ mode: 'open' }); // or {mode: 'closed'}
//open mode: You can access the Shadow DOM from the main document using JavaScript (e.g., myElement.shadowRoot).
//closed mode: The Shadow DOM is completely inaccessible from the main document. This is more secure but less flexible.
