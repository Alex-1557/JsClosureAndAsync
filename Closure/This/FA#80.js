const obj6 = {
  count: 10,
  doSomethingLater() {
    setTimeout(() => {
      this.count++;
      console.log(this);
      console.log(this.count);
    }, 300);
  },
};
obj6.doSomethingLater();
