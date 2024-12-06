//Performance Considerations 
// 5. Object methods vs. closures:
const obj = {
    value: 5,
    method: function() { return this.value * 2;  } // slightly faster access to 'value' than an equivalent closure function.
  };