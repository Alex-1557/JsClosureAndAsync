//2. Event Listener with Closure:

const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    console.log(`Button ${i} clicked`); // Correct index captured
  });
}
