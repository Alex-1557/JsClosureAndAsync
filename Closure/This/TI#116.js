function add(c, d) {
  return this.a + this.b + c + d;
}
const o = { a: 1, b: 3 };
console.log(
    add.call(o, 5, 7),
    add.apply(o, [10, 20])
)
