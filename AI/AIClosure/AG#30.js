//Closures and the Garbage Collector 

// 3. Closure in a loop (potential memory buildup if not handled):
const closures = [];
for (let i = 0; i < 5; i++) {
  closures.push(function() { return new Array(1000).fill(i); });
}
// Each closure in 'closures' holds a 1000-element array