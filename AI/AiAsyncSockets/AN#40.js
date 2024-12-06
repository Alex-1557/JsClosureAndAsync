//4. Displaying typing indicators (simulated):

const typingIndicator = document.getElementById('typingIndicator');
messageInput.addEventListener('input', () => {
  // When user types
  typingIndicator.textContent = 'User typing...';
  // Send typing notification to server in a real application
  setTimeout(() => {
    // Clear indicator after a short delay
    typingIndicator.textContent = '';
  }, 1000); // 1 second delay
});
