// browser
greeter = "global scope declaration";
let times = 4;

if (times > 3) {
  let greeter = "local redeclaration !";
}

console.log(greeter);
