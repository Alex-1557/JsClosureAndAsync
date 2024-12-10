Array.prototype.equals = 
  function (array, strict) {
    if (!array) return false;
    if (arguments.length == 1) strict = true;
    if (this.length != array.length) return false;
    for (var i = 0; i < this.length; i++) {
        if (this[i] instanceof Array && 
            array[i] instanceof Array) {
        if (!this[i].equals(array[i], strict)) 
            return false;
        } else if (strict && this[i] != array[i]) {
            return false;
        } else if (!strict) {
            return this.sort().equals(array.sort(), 
              true);
        }
    }
    return true;
};
const fruits2 = [Function(), class {},  
    "A", "2", "B", 1, new class C {},
    true, {}, "𠮷", [], this === global,
    null, ,undefined, NaN, this];   

const fruits3 = [function (){}, class {} ,  
    "A", "2", "B", 1, new class C {},
    true, {}, "𠮷", [], false,
    null, , undefined, NaN, undefined];

console.log(fruits2.equals(fruits3))