async function* foo() {
  yield 31;
  yield 32;
}
(async function () {
  for await (const num of foo()){
    console.log( num);
    break;
  }
})();
