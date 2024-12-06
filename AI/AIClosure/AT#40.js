//Closures and this

// 4.  Explicit binding of 'this':
function myFunc() {
    console.log(this.value);
}
const obj = { value: 42 };
const boundFunc = myFunc.bind(obj);
boundFunc(); // Output: 42
