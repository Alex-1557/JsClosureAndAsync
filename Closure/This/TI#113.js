const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
  3: 4,
};
console.log(
  Array.prototype.flatMap
    .call(arrayLike, (x) => 
      [x, x * 2]));
console.log(
  Array.prototype.flatMap
    .call(arrayLike, (x) => 
      ({length: 1,0 : x,
  }))
);
