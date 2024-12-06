const toString = 
   Object.prototype.toString;

const arr = 
   [1, undefined, null, 'a']
   
console.log(
   toString.call(async function*(){}))
console.log(
   toString.call(...arr))