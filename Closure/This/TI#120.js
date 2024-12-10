const obj = {
  getThisGetter() {
    const getter = () => this;
    return getter;
  },
};

const fn = obj.getThisGetter();
console.log(fn() === obj);
