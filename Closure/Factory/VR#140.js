function foo() {
    var cl = 2;
    return function () {
        console.log(cl);
    };
}

var myFunc = foo(); 
myFunc(); 