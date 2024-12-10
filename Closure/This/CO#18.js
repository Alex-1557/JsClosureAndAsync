const obj = {
  value: "obj",
  method() {
    console.log(this.value);
  },
};
obj.method(), obj.method();
