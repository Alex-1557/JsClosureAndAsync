function fun() {
    return this;
}
console.log(
    fun() === undefined);                 
console.log(
    fun.call(2) === 2);                   
console.log(
    fun.apply(null) === null);            
console.log(
    fun.call(undefined) === undefined);   
console.log(
    fun.bind(true)() === true);