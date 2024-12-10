function C(a, b) {
  this.c = a + b;
}
var instance = 
   Reflect.construct(C, [20, 22]);
console.log(instance.c);
