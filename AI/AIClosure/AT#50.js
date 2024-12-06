//Closures and this

// 5.  'this' in setTimeout callbacks:
const objT = {
    name: "My Object",
    method: function() {
        setTimeout(function() { console.log(this.name); }, 100); // 'this' will be the global object (window)
        setTimeout(() => { console.log(this.name); }, 100);     // 'this' will be 'My Object' (arrow function inherits 'this')

    }
}