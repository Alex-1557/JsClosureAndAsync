function Promise1() {
  return new Promise((resolve, _)=>{
    setTimeout(() => 
      resolve("a"), 1000);
  });
}
function Promise2() {
  return new Promise((resolve,_)=>{
    setTimeout(() => {
        console.log(
          performance.now()-start);
        resolve("b")
    }, 2000);
  });
}
let start = performance.now();
Promise.race([Promise1(), 
              Promise2()])
       .then((val) => {
        console.log(val, 
          performance.now()-start);
});
