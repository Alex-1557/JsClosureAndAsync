//1. Simulating incoming messages:

function displayMessage(message) {
  const chatBox = document.getElementById('chatBox');
  const newMessage = document.createElement('div');
  newMessage.textContent = message;
  chatBox.appendChild(newMessage);
}

// Simulate receiving messages at random intervals
setInterval(
  () => {
    const randomMessage = `User ${Math.floor(Math.random() * 10)}: Hello!`;
    displayMessage(randomMessage);
  },
  Math.random() * 2000 + 500,
); // Random interval between 0.5 and 2.5 seconds
