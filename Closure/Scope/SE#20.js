var greeter = "global scope declaration";
var times = 4;

if (times > 3) {
  var greeter = "local redeclaration !";
}

console.log(greeter);