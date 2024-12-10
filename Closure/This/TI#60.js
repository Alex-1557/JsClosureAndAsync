const globalThis = this;
const foo = () => this;
console.log(
  foo() === globalThis, foo());
