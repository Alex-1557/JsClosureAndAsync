class NamedFoo {
  constructor() {}
  whoIsThere() {
    return this.name;
  }
}

class Bar extends NamedFoo {}
Object
   .setPrototypeOf(Bar,new NamedFoo());

console.log(Bar.whoIsThere()) 
console.log(Bar.name)
console.log(NamedFoo.whoIsThere)
console.log(
  Object.hasOwn(NamedFoo,'whoIsThere')) 
console.log(
  NamedFoo.hasOwnProperty('whoIsThere'))   
console.log(
  NamedFoo.prototype
    .hasOwnProperty('whoIsThere'))  
console.log(    
  NamedFoo.whoIsThere());
