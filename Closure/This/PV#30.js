class ClassWithPrivateStaticField {
  static #privateStaticField = 42;

  static publicStaticMethod() {
    return this.#privateStaticField;
  }
}
class Subclass1 extends 
    ClassWithPrivateStaticField {
  static callSuperMethod() {
    return super.publicStaticMethod();
  }
}
try {
  Subclass1.callSuperMethod();
} catch (error) {
  console.log(error);
}
