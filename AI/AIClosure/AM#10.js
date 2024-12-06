//Module Pattern

// 1. Basic module pattern
const myModule = (function() {
    let privateVar = 0;
    function privateFunc() { /* ... */ }

    return {
      publicMethod: function () { /* ... uses privateVar and privateFunc */ }
    }
})();