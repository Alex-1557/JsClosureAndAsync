// 2. Custom Event with Data (using CustomEvent):

const data = { message: 'Hello, world!', value: 123 };
const myEvent = new CustomEvent('dataEvent', { detail: data });

document.dispatchEvent(myEvent);

document.addEventListener('dataEvent', (event) => {
  console.log('Event data:', event.detail); // Access data via event.detail
});
