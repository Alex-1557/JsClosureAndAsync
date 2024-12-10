var arr = [1,,3,4,5]
var nums = arr.map((v, i) => v + i);
var bob = {
    _name: "Bob",
    _friends: arr,
    printFriends() {
      this._friends.forEach(f =>
        console.log(this._name 
            + " knows " + f));
    }
  };

var obj2 = {
    __proto__: arr,
    ['__proto__']: bob,
    nums,
    toString() {
     return "d " + super.toString();
    },
    [ "prop_" + (() => 42)() ]: 42
};

console.log(obj2)
console.log(obj2.__proto__)
obj2.__proto__.printFriends()
console.log(obj2.toString())
console.log(obj2[0].toString())
console.log(...obj2)