function f() {
    return this.a;
}

const g = f.bind({ a: "azerty"});
console.log(1, g()); 

const h = g.bind({ a: "yoo" }); 
console.log(2, h()); 

const o1 = { a: 37, f, g, h };
console.log(3,
  o1.a, o1.f(), o1.g(), o1.h()); 