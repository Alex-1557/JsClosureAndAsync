//Module Pattern

//3. Module with dependencies
const dependentModule = (function(module1) {
    return {
        doSomething: function() { module1.someMethod(); }
    };
})(myModule);
