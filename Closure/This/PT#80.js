import {prototypes} from "./prototypes.js"
function Person(name) {
    this.name = name;
}
const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); 
console.log(Object.hasOwn(irma, "greet"));

console.log(prototypes(irma))