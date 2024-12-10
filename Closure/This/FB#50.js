const member = {
  firstName: "Hege",
  lastName: "Nilsen",
}

const person2 = {
  fullName: function (city, country){
     return this.firstName + " " 
            + this.lastName + "," 
            + city + "," + country;
  }
}

console.log(
  person2.fullName
    .call(member, ["Oslo", "Norway"]));