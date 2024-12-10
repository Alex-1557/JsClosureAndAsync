function fun() {
  return this;
}
console.log(fun.bind(true)());
