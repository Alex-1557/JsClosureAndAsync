const Foo = class NamedFoo {
  name = "1"
  constructor() {}
  whoIsThere() {
    return this.name;
  }
};
const Bar = new Foo();
console.log(
    Bar.whoIsThere(),
    new Foo().whoIsThere(),
    Bar.name,
    Foo.name);
