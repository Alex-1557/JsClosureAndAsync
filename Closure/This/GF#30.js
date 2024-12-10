function Sheep(name, weight) {
  this.name = name;
  this.weight = weight;
}
Sheep.prototype.clone = function () {
  return new Sheep(this.name, this.weight);
};
module.exports = Sheep;

//--------------------

const expect = require("chai").expect;
describe("prototype test", () => {
  it("sanity", () => {
    var sheep = new Sheep("dolly", 10.3);
    var dolly = sheep.clone();
    expect(dolly.name).to.equal("dolly");
  });
});
