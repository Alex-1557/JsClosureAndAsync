// browser

// p is a global variable
globalThis.p = "g";
console.log(1, self)
console.log(2, globalThis.p)

function myFunc() {
  // p is a local variable
  const p = "l";
  console.log(3, self)

  function decl() {
    console.log(4, p);       
    console.log(5, self)
    console.log(6, self?.p);  
  }
  const expr = function () {
    console.log(7, p);       
  };
  //EvalError: call to Function() blocked by CSP
  //const cons = new Function("\tconsole.log(8, p);");  

  decl();
  expr();
  //EvalError: call to Function() blocked by CSP
  //cons();
}
myFunc()