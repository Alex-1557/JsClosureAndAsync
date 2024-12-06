//Closures and this

// 1. Regular function 'this' depends on how it's called:
function outer() {
    const obj = {
      name: "Outer",
      inner: function() { console.log(this.name); }
    };
    obj.inner(); // Output: "Outer"
    const innerFunc = obj.inner;
    innerFunc(); // Output: undefined (in strict mode, or global object in non-strict)
  }