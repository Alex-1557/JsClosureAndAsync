function Person() {
  if (typeof Person.instance === "object") 
    return Person.instance;
  Person.instance = this;
  return this;
}
module.exports = Person;

//--------------------------------

const expect = require('chai').expect;
describe("singleton test", () => {
  it("sanity", () => {
    var john = new Person();
    var john2 = new Person();

    expect(john).to.equal(john2);
  });
});
