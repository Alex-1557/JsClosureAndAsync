//Module Pattern

//5. Nested modules
var myNamespace = myNamespace || {};
myNamespace.outerModule = (function(){

    var innerModule = (function() { /* ... */ })();

    return {
        // ...
    };
})();
