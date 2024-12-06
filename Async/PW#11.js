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
console.time('start');
Promise.all([Promise1(), 
             Promise2()])
       .then((val) => {
          console.timeEnd('start', 0)
          console.log(val)});
  