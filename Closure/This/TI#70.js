const globalThis = this;
const foo = () => this;
const obj = { name: "obj" };
console.log(
  foo.call(obj) === globalThis, foo());
