async function foo1() {
  return 1;
}
async function foo2() {
  return Promise.resolve(2);
}
async function foo3() {
  return Promise
    .resolve(2).then(() => 3);
}
console.log(
    foo1(), await foo1(), 
    foo2(), await foo2(),
    foo3(), await foo3());
