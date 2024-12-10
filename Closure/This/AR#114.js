Array.prototype.MyPrint = function () {
  Array.prototype.forEach.call(this, (v, _) => {
    console.log(v);
  });
};
const arr = [1, 2, 3];
arr.MyPrint();
