//3. Event bubbling and capturing:

const parent = document.getElementById('parent');
const child = document.getElementById('child');

// Add event listener to the parent during capturing phase
parent.addEventListener(
  'myEvent',
  (event) => {
    console.log('Parent Capturing: ', event.target.id);
  },
  true,
); // Capturing phase

// Add event listener to the parent during bubbling phase
parent.addEventListener(
  'myEvent',
  (event) => {
    console.log('Parent Bubbling: ', event.target.id);
  },
  false,
); // Bubbling phase (default - you can omit false).

child.addEventListener('myEvent', (event) => {
  console.log('Child Bubbling: ', event.target.id);
});

// Emit from the child
const event = new Event('myEvent', { bubbles: true }); // Must set bubbles: true for it to propagate up DOM tree.
child.dispatchEvent(event);

// Output order
// "Parent Capturing: child"
// "Child Bubbling: child"
// "Parent Bubbling: child"
