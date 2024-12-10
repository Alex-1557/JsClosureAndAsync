class X {
  constructor() {
    Object.defineProperty(
      this, 
      "prop", {
        configurable: true,
        writable: false,
        value: 1,
    });
  }
}
class Y extends X {
  constructor() {
    super();
  }
  foo() {
    try {
      super.prop = 2;
    } catch (error) {
      console.log(error);
    }
  }
}
const y = new Y();
y.foo();
