function fun() {
  return this;
}
console.log(
  fun.call(undefined),
  fun.call(null),
  fun.call(NaN)
);
