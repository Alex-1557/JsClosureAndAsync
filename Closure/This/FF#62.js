function foo() {
    for (const value of arguments) {
        console.log(value);
    }
}
let a=1, b=2;
foo(
    {
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
        ...[5, 6],
      }
);