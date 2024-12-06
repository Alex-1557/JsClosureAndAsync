// browser
this.hello = "global scope declaration";
let times = 4;
if (times > 3) {
  var hello = "local redeclaration !";
}
console.log(hello);
