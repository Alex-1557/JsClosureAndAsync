const arr1 = [1, 2, 3, , {}, 
  null, undefined, NaN];
console.log(
  arr1.map((x) => [x * 2]));
console.log(
  arr1.flatMap((x) => [x * 2]));
