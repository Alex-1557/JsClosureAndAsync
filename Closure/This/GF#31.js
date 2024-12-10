class Sheep {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
  clone() {
    return new Sheep(this.name, this.weight);
  }
}
export default Sheep;

// -------------------------------

const expect = require('chai').expect;
describe('prototype_es6 test', () => {
  it('sanity', () => {
    var sheep = new Sheep('dolly', 10.3);
    var dolly = sheep.clone();
    expect(dolly.name).to.equal('dolly');
    expect(dolly.weight).to.equal(10.3);
    expect(dolly).to.be.instanceOf(Sheep);
    expect(dolly === sheep).to.be.false;
  });
});