var bob = {
  _name: "Bob",
  _friends: [1, 2, 3, 4, 5],
  printFriends() {
    this._friends.forEach((f) => 
      console.log(this._name+" knows "+f));
  },
};
bob.printFriends()
