function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
// function factory
const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));

//makeAdder is a function factory, the function factory creates two new functions—one that adds five to its argument, and one that adds 10.
//add5 and add10 both form closures. They share the same function body definition, but store different lexical environments. 
//In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.
