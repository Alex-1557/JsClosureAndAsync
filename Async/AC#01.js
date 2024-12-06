function f1(callback) {
  setTimeout(() => callback(), 0);
}
function f2(callback) {
  callback();
}
f1(() => console.log("callback 1"));
f2(() => console.log("callback 2"));
