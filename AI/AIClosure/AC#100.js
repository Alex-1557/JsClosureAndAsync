//10. Memory Management:
function createLargeObject() {
    let largeArray = new Array(1000000).fill(0);  // Large object
  
    return function() {
      return largeArray[0]; // Closure keeps largeArray in memory
    };
  }
  
  let accessElement = createLargeObject();
  
  // ... (largeArray remains in memory even if not directly used) ...
  //Needs Consideration: Be mindful of closures holding onto large objects, which can affect memory usage. If accessElement is no longer needed, set it to null (accessElement = null) to allow the garbage collector to reclaim the memory used by largeArray.
  