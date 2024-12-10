const person = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    let x = "demo";
    console.log(
      this.firstName + " " + this.lastName);
  },
};
person.display();
setTimeout(person.display, 1000);
