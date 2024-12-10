const obj = {
  a: 3,
  b: 4,
  get f10() {
    return this.a * this.b;
  },
};
var r=0;
function f7({ a, b }, c = 3, 
            ...rest) {
  console.log(1, a, b, c);
  for (let one of rest) {
    console.log(2, one);
   r += one
  }
  return a + b + c + r;
}
console.log(f7(obj))
console.log(
  f7(obj, undefined , obj.f10, 2, 3));


