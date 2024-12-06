//2. Stopping Propagation (stopPropagation):

child.addEventListener('click', (event) => {
  console.log('Child clicked!');
  event.stopPropagation(); // Stop bubbling here
});
//Now, clicking the button will only log "Child clicked!". The event will not propagate to the parent or grandparent.
