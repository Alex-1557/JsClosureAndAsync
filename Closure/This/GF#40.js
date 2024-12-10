function bmwFactory(type) {
  if (type === "X5") 
    return new Bmw(type, 108000, 300);
  if (type === "X6") 
    return new Bmw(type, 111000, 320);
}
function Bmw(model, price, maxSpeed) {
  this.model = model;
  this.price = price;
  this.maxSpeed = maxSpeed;
}
module.exports = bmwFactory;

//---------------------------

const expect = require('chai').expect;
describe('factory test', () => {
  it('sanity', () => {
    var x5 = bmwFactory('X5');
    var x6 = bmwFactory('X6');
    expect(x5.price).to.equal(108000);
    expect(x6.price).to.equal(111000);
    expect(x5.maxSpeed).to.equal(300);
    expect(x6.maxSpeed).to.equal(320);
  });
});