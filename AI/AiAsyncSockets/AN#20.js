//2. Handling user input:

const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  sendMessage(message); // Send message to server (simulated here)
  messageInput.value = ''; // Clear the input field
});

function sendMessage(message) {
  // In a real app, this would send data to the server
  displayMessage('You: ' + message); // Display user's message
}
