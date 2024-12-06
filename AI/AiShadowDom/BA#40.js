//3. Styling the Shadow DOM:

// Create a <style> element:
const style = document.createElement('style');
style.textContent = `
  h2 {
    color: blue;
  }
  p{
    color: green;
  }

`;
shadowRoot.appendChild(style);

// Or, add a <link> element to an external stylesheet:
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'styles.css'; // Path to your stylesheet in the shadow DOM
shadowRoot.appendChild(link);
