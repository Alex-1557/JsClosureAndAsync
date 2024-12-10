const globalThis = this;
const foo = () => this;
const obj = { name: "obj" };
console.log(
   foo.call(obj) === globalThis); 
const boundFoo = foo.bind(obj);
console.log(
   boundFoo() === globalThis);