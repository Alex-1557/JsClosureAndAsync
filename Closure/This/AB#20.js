import {prototypes} from "./prototypes.js";
// Abstract Class Animal1.
class Animal1 {
  constructor() {
   if (this.constructor == Animal1) {
    throw new Error(
     "Abstract classes can't be instantiated.")}}
  say() {
    throw new Error(
     "Method 'say()' must be implemented.")}
  eat() {console.log("eating")}
}
class Dog extends Animal1 {
    say() {console.log("bark")}
}
class Cat1 extends Animal1 {
    say() {console.log("meow")}
}
class Horse extends Animal1 { }
console.log(
    'new Horse()', prototypes(new Horse()))
console.log(
    'Horse', prototypes(Horse))
console.log(
    'Animal1',prototypes(Animal1))
new Dog().eat();
new Cat1().eat(); 
new Horse().eat();
new Dog().say(); 
new Cat1().say();
try {
    new Horse().say(); 
} catch (error) {
    console.log(error)
}
try {
    new Animal1(); 
} catch (error) {
    console.log(error)
}

