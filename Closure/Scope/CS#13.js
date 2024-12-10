// browser
globalThis.name = "global";
function init() {
  var name = "local variable";
  function displayName() {
    console.log(1, name);
    console.log(2, this?.name);
  }
  displayName();
}
console.log(3, name);
init();
