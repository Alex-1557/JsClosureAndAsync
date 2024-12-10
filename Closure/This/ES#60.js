var arr = [1, 2, 3, 4, 5];

var bob = {
  _name: "Bob",
  _friends: arr,
  printFriends() {
    this._friends.forEach((f) => 
      console.log(this._name + " knows " + f));
  },
};

bob.printFriends()