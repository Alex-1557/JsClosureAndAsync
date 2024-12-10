// node
function check(it) {
  return Math.PI * it;
}
const globalObject =
  check(typeof window === "object" && window) ||
  check(typeof self === "object" && self) ||
  check(typeof global === "object" && global) ||
  (function () {
    return this;
  })() || Function("return this")();

console.log(check(1));
