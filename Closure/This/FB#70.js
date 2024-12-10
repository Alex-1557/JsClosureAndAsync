function add1(c, d) {
    return this.a +
           this.b + c + d;
}
const x = { a: 1, b: 3 };
console.log(
    add1.call(x, 5, 7)); 
console.log(
    add1.apply(x, [10, 20])); 
console.log(
    add1.apply(0, [10, 20])); 

