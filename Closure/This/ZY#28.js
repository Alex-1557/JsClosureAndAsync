class Unit {
  constructor(id) {
    this.id = id;
  }
  toString() {
    return `unit${this.id}`;
  }
}
const units = new Set([new Unit(101), 
                       new Unit(102)]);
console.log(
    Object.hasOwn({ foo: 42 }, 'foo'),
    Object.fromEntries(units.entries()))