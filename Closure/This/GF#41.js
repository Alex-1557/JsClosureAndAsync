class BmwFactory {
  static create(type) {
    if (type === "X5") 
        return new Bmw(type, 108000, 300);
    if (type === "X6") 
        return new Bmw(type, 111000, 320);
  }
}
class Bmw {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}
export default BmwFactory;

//----------------------

const expect = require('chai').expect;
describe('Factory es6 test', () => {
  it('We can create a X5 instance', () => {
    const x5 = BmwFactory.create('X5');
    expect(x5.model).to.equal('X5');
  });
  it('The X5 price is properly set', () => {
    const x5 = BmwFactory.create('X5');
    expect(x5.price).to.equal(108000);
  });
});