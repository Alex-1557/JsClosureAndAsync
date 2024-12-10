class NamedFoo {
  constructor() {}
  whoIsThere() {
    return this.name;
  }
}
class Bar extends NamedFoo {}
Object.setPrototypeOf(Bar, 
  new NamedFoo());
const foo = new NamedFoo();
console.log(
    Bar.whoIsThere(), 
    Bar.name, 
    foo, 
    foo.whoIsThere());
