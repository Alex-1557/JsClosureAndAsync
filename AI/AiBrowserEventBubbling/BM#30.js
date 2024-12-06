//3. event.target vs. this:

grandparent.addEventListener('click', function (event) {
  console.log('this: ', this.id); // grandparent
  console.log('event.target: ', event.target.id); // child (if you clicked the child).
});

//Inside an event handler:
//    this refers to the element the listener is attached to.
//    event.target refers to the element where the event originated.
