//1. Basic Bubbling:

let x = `
    <div id="grandparent">
        <div id="parent">
            <button id="child">Click Me</button>
        </div>
    </div>
`;

const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

grandparent.addEventListener('click', () => {
  console.log('Grandparent clicked!');
});

parent.addEventListener('click', () => {
  console.log('Parent clicked!');
});

child.addEventListener('click', () => {
  console.log('Child clicked!');
});
