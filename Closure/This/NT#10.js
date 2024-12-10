class Parent {
  constructor() {
    console.log(1, new.target);
  }
}
class Child extends Parent {
  constructor() {
    super();
    console.log(2, this);
  }
}
new Child();
