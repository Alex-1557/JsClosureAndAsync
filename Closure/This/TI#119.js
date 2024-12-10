function f() {
  return this.a;
}
const g = f.bind({ a: "azerty" });
console.log(g());

const h = g.bind({ a: "yoo" });
console.log(h());

const o = { a: 37, f, g, h };
console.log(o.a, o.f(), o.g(), o.h());
