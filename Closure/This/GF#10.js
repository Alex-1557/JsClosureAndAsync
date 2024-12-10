class Person {
  constructor() {
    if (typeof Person.instance === "object") {
      return Person.instance;
    }
    Person.instance = this;
    return this;
  }
}
module.exports = Person;

//--------------------------------

const expect = require("chai").expect;
describe("singleton_es6 test", () => {
  it("sanity", () => {
    var john = new Person();
    var john2 = new Person();
    expect(john).to.equal(john2);
    expect(john === john2).to.be.true;
  });
});
