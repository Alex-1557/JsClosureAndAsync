//Closures and the Garbage Collector 

// 1. Closure referencing a large array:
function largeData() {
    const bigArray = new Array(1000000).fill(0);
    return function() { return bigArray; };
  }
  let myClosure = largeData();  // bigArray remains in memory