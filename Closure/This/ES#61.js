var arr = [1,2,3,4,5]
var bob = {
    _name: "Bob",
    _friends: arr,
    printFriends() {
      this._friends.forEach(f =>
        console.log(
          this._name+" knows "+f));
    }
  };
var nums = arr.map((v, i) => v + i);
var obj1 = {
    __proto__: bob,
    ['__proto__']: arr,
    nums,
    toString() {
     return "d " + super.toString();
    },
    [ "prop_" + (() => 42)() ]: 42
};
console.log(obj1)
console.log(...obj1)
