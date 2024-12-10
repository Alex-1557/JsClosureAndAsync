// browser

// p is a global variable
globalThis.p = "g";
console.log(1, this)
console.log(2, globalThis.p)

function myFunc() {
  // p is a local variable
  const p = "l";
  console.log(3, this)

  function decl() {
    console.log(4, p);       
    console.log(5, this)
    console.log(6, this?.p);  
  }
  const expr = function () {
    console.log(7, p);       
  };
  const cons = 
     new Function("\tconsole.log(8, p);");  

  decl();
  expr();
  cons();
}
myFunc()