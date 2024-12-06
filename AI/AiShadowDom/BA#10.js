//You can't directly define the content of a Shadow DOM within HTML. The Shadow DOM is created and manipulated using JavaScript. However, you can indicate in your HTML where you intend to attach a Shadow DOM. The actual content of the Shadow DOM will then be added dynamically using JavaScript. Here's how:
//<template> Element: The <template> element in HTML acts as a container for content that is not displayed initially. It's a blueprint for the Shadow DOM content.

let shadowDom =`
<template id="my-template">
  <h2>My Web Component</h2>
  <p>This content will be in the Shadow DOM.</p>
  <style>
    h2 { color: blue; }
  </style>
</template>

<div id="my-element"></div> 
`

// JavaScript: You use JavaScript to:
// Get the <template> element.
// Get the element where you want to attach the Shadow DOM (e.g., <div id="my-element">).
// Create the Shadow DOM using attachShadow().
// Clone the content of the <template> (using template.content.cloneNode(true)) and append it to the Shadow DOM.
// The key takeaway: the HTML <template> provides a way to structure the content you want to add to the Shadow DOM, but the actual creation and population of the Shadow DOM happens through JavaScript. This maintains the encapsulation principle of Shadow DOM, as it prevents direct manipulation from the main document's HTML.


const template = document.getElementById('my-template');
const myElement = document.getElementById('my-element');
const shadowRoot = myElement.attachShadow({mode: 'open'});
shadowRoot.appendChild(template.content.cloneNode(true)); // Add template content



