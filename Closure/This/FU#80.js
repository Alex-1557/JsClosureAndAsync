const obj = {
  a: 3,
  b: 4,
  get f10() {
    return this.a * this.b;
  },
};
function f7({ a, b }, c = 3, 
            ...rest) {
  console.log(1, a, b, c);
  for (let one of rest) {
    console.log(2, one);
  }
  return a * b * c;
}
console.log(
  f7(obj, undefined, 4, 5));
console.log(f7(obj));
