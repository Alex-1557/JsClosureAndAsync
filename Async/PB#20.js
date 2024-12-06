const a = '1';
const b = [Function(), class {},  
    "A", "2", "B", 1, new class C {},
    true, {}, "𠮷", [], this === global,
    null, , undefined, NaN, this];
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
const promVal = Promise.resolve(obj4)
console.log(promVal)