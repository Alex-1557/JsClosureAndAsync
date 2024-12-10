// browser
name = "global";
function init() {
  var name = "local variable";
  function displayName() {
    console.log(1, name);
    console.log(2, this?.name);
  }
  displayName();
}
console.log(3, this?.name);
init();

//Every closure has three scopes: Local scope (Own scope), Enclosing scope (can be block, function, or module scope), Global scope
//3 global
//1 local variable 
//2 global