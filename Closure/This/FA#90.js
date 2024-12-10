class Counter {
  constructor() {
    this.sum = 0;
    this.count = 0;
  }
  add1(array) {
    array.forEach(
       function countEntry(entry) {
          this.sum += entry;
          ++this.count;
    }, this);
  }
  add2(array) {
    array.forEach((entry) => {
      this.sum += entry;
      ++this.count;
    });
  }
}
const obj7 = new Counter();
obj7.add1([2, 5, 9]);
console.log(obj7.count, obj7.sum); 

obj7.add2([2, 5, 9]);
console.log(obj7.count, obj7.sum); 
