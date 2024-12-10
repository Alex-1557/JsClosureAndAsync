const a = '1', b = '2';
let obj4 = {
    a: "foo", b: 42, c: {},
    d: new Function('return this'),
    1: "number literal property",
    "toString": `string property ${a}${b}`,
    method(prm) {return prm[0]},
    shortProp1() {return this[`${a}${b}`]},
    get prop1() {return this.__proto__},
    set prop1(value) {this.c = value},
    [`${a}${b}`]: "computed property",
    __proto__: [3, 4],
    ...[5, ,6],
  }; 
console.log(
    obj4.length, 
    obj4.__proto__.length,
    obj4[1].length)
