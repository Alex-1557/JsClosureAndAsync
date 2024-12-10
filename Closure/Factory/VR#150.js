var sayHello = function (name){
   var text = 'Hello, ' + name;
   return function () {
       console.log(text);
   };
};
sayHello('Todd'); 
sayHello('Matt')()