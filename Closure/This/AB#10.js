import {prototypes} from "./prototypes.js";
//@constructor, @abstract
var Animal = function () {
  if (this.constructor === Animal) {
    throw new Error(
      "Can't instantiate abstract class!");
  }
  // Animal initialization...
};
// @abstract
Animal.prototype.say = function () {
  throw new Error("Abstract method!");
};
var Cat = function () {
  Animal.apply(this, arguments);
  // Cat initialization...
};
Cat.prototype = 
         Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.say = function () {
  console.log("meow");
};
var cat = new Cat();
console.log("cat", prototypes(cat));
console.log("Cat", prototypes(Cat));
console.log("Animal", prototypes(Animal));
cat.say();
