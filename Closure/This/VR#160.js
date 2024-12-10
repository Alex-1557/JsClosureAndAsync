var myFunction1 = function (){
    console.log(this); 
};
myFunction1();

var myObject = {};
myObject.myMethod = function (){
    console.log(this); 
};

let myFunction2=myObject.myMethod
myFunction2()