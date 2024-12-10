// node
const obj = { a: "Custom" };
var a = "Global";
function whatsThis() {
  return this.a;
}
obj.whatsThis = whatsThis;
console.log(obj.whatsThis());
