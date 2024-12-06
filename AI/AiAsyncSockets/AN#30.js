//3. Updating user list (simulated):

const userList = document.getElementById('userList');

function updateUserList(users) {
  userList.innerHTML = ''; // Clear existing users
  users.forEach((user) => {
    const userItem = document.createElement('li');
    userItem.textContent = user;
    userList.appendChild(userItem);
  });
}

// Simulate receiving user list updates:
setInterval(() => {
  // In real app, update when server notifies
  const randomUsers = Array.from(
    { length: 5 },
    () => `User ${Math.floor(Math.random() * 20)}`,
  );
  updateUserList(randomUsers);
}, 5000);
