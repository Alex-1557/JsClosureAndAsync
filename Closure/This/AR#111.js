Array.prototype.FalseOrFirst = function () {
  console.log(this);
  if (this.length < 1) {
    return -1;
  }
  return this[0];
};
const arr = [1, 2, 3];
console.log(arr.FalseOrFirst());
