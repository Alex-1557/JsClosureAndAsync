const obj5 = {
    num: 100,
};
globalThis.num = 42;
console.log(num);

const add = function (a) {
    return this.num + a;
};

console.log(
    add.call(obj5, 1, 2)); 
console.log(
    add.apply(obj5, [1, 2])); 

const boundAdd = add.bind(obj5);
console.log(
    boundAdd(1, 2)); 
