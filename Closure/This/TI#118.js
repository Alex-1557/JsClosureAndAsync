// browser
function bar() {
  console.log(
    Object.prototype.toString
      .call(this));
  }
console.log(
  bar.call(7),
  bar.call("foo"),
  bar.call(undefined))
  