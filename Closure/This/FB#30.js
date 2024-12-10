const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + 
    " " + this.lastName;
  },
};
console.log(person.fullName());

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

console.log(
  person.fullName.call(member));
