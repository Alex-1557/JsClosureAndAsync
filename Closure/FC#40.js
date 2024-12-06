//--- arrow function fn2()() === globalThis is true in non-strict mode
const obj3 = {
  getThisGetter() {
    const getter = () => this;
    return getter;
  },
};

const fn1 = 
   obj3.getThisGetter();
console.log(
   fn1() === obj3); 

const fn2 = 
   obj3.getThisGetter;
console.log(
   fn2()() === globalThis);