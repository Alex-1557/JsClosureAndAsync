const parent = {
  value: 2,
  plus() {
    return this.value + 1;
  },
};
console.log(parent.plus());

const child = {
  __proto__: parent,
};
console.log(child.plus());

child.value = 1;
console.log(child);
