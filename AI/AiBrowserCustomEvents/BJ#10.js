//1. Basic Custom Event:

const myEvent = new Event('myCustomEvent');

// Dispatch the event on a specific element:
document.body.dispatchEvent(myEvent);

// Or any other DOM element.

const myDiv = document.getElementById('myDiv'); // Example
myDiv.dispatchEvent(myEvent);

// Listen for the event
document.body.addEventListener('myCustomEvent', () => {
  console.log('Custom Event Triggered');
});
