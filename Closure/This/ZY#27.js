class Unit {
  constructor(id) {
    this.id = id;
  }
  toString() {
    return `unit${this.id}`;
  }
}
console.log(
    new Unit(101).toString(),
    new Set([new Unit(101), 
    new Unit(102)]))