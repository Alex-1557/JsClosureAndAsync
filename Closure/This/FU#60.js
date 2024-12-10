const obj = {
  a: 0,
  b: 0,
  f6(x, y) {
    return x * y;
  },
  get f10() {
    return this.a * this.b;
  },
};
console.log(
  obj.f6(6, 7), 
  obj.f6(7, 8), 
  obj.f10);
  
obj.a = 10;
obj.b = 20;
console.log(obj.f10);
