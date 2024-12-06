//Closures and the Garbage Collector 

// 5.  Closure holding onto DOM elements:
function attachListener(element) {
    return function() { console.log(element.id) };
  }
  const myListener = attachListener(document.getElementById('myElement'));
  //  'myListener' now holds a reference to the DOM element. Remove the listener when no longer needed to allow garbage collection of the element.