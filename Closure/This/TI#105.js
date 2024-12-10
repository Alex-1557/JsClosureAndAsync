// node
console.log(
    global === globalThis)
console.log(
    Function('globalThis = this')())