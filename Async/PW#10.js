function Promise1() {
  return new Promise((resolve,_)=>{
    setTimeout(() => 
      resolve("a"), 1000);
  });
}
function Promise2() {
  return new Promise((resolve,_)=>{
    setTimeout(() => 
      resolve("b"), 2000);
  });
}
let start = performance.now();
Promise.all([Promise1(), 
             Promise2()])
        .then((val) => {
    console.log(
        performance.now()-start);
    console.log(val);});
