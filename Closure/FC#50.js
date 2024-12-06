//--- Nested functions and closures
function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}

const fnInside = outside(3); 
console.log(fnInside(5));    

console.log(outside(4)(5)); 