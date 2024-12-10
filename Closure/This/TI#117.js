// node
function print() {
  console.log(
    Object.prototype.toString.call(this));
}

print.call(7)
print.call(undefined)
print.call(print)