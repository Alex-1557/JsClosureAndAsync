class C {
  #x;
  constructor(x) {
    this.#x = x;
  }
  static getX(obj) {
    if (#x in obj) return obj.#x;
    return "obj must be an instance of C";
  }
}
console.log(C.getX(new C("foo")));
console.log(C.getX(new C(0.196)));
console.log(C.getX(new C(new Date())));
console.log(C.getX({}));
