const toString = 
   Object.prototype.toString;

console.log(
    toString
      .call(new Promise(()=>{})))
console.log(
    toString
      .call(setTimeout(()=>{},100)))