function fun() {
  return this;
}
console.log(fun.apply(null));
