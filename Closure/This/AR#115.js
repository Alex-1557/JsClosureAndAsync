function calc() {
  this.forEach((v, i) => {
    console.log(i * v);
  });
}
const fruits = [Function(), class {},  
  "A", "2", "B", 1, new class C {},
  true, {}, "𠮷", [], this === global,
  null, , undefined, NaN, this];
calc.call(fruits);
