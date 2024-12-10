function getThis() {
    return this;
}

Number.prototype.getThis = getThis;
console.log(
    typeof (1).getThis());
console.log(
    getThis() === globalThis); 
