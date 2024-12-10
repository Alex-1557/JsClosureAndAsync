let Person = (() => {
  let NAME = Symbol("name");
  return class {
    constructor(name) {
      console.log(1, this, NAME)
      this[NAME] = name;
    }
    getName() {
      console.log(2, this, NAME)
      return this[NAME];
    }
  };
})();
let person = new Person("Vasya");
console.log(3, person.getName());


