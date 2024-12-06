//Closures and this



// 3.  'this' in event handlers (classic problem):
const button = document.getElementById('myButton');
button.addEventListener('click', function() { console.log(this.id); });  // 'this' refers to the button
button.addEventListener('click', () => { console.log(this.id); }); // 'this' is from the surrounding scope (potentially not what you intend here)
