(function () {
  var key = Symbol("key");
  function MyClass(privateData) {
    this[key] = privateData;
  }
  MyClass.prototype = {
    doStuff: function () {
      this[key];
    },
  };
  console.log(typeof key);
})();

var c = new MyClass("hello");
c["key"] === undefined;
