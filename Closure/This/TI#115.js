// browser
var a = "Global";
function whatsThis1() {
  return this.a; 
}
function whatsThis2() {
  return a; 
}
console.log(
  whatsThis1(),
  whatsThis2());
