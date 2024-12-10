globalThis.p = 5;  

console.oldLog = console.log;
let log
console.log = (v) => {
    log = v
}
console.log(p)

console.log = console.oldLog
console.log(log)