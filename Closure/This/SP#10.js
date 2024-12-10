import {prototypes} 
    from "./prototypes.js"
class Base {
    static getName() {
        console.log(this.name);
    }
}
class Extended extends Base {
    static getName() {
        super.getName();
    }
}
Extended.getName();
const Z = new Extended

console.log(prototypes(Z))