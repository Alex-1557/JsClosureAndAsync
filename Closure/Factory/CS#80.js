const e = 10;
function sum1(a) {
  return function sum2(b) {
    return function sum3(c) {
      return function sum4(d) {
        return a + b + c + d + e;
      };
    };
  };
}
const sum2 = sum1(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result);
