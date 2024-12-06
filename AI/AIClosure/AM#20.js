//Module Pattern

//2. Revealing Module Pattern:
const myRevealingModule = (function(){
    let privateVar = 0;
  
    function publicFunc() { /* ... */ }
  
    return {
      publicFunc: publicFunc
    };
  })();