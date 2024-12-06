//3. Error Handling:

myEmitter.on('error', (err) => {
  console.error('An error occurred:', err);
});

myEmitter.emit('error', new Error('Something went wrong!')); // Prints error message.

// If no 'error' listener, the error will be thrown, crashing the app.
