function Promise1() {
  return new Promise((resolve,_)=> 
    {setTimeout(() => 
      resolve("a"), 1000);
  });
}
function Promise3() {
  return new Promise((_, reject)=>{
    setTimeout(() => 
      reject("c"), 2000);
  });
}
console.time("start");
Promise.all([
  Promise1(),
  Promise3()
  .catch((err) => {
    console.timeEnd("start");
    return err;}),
    ])
  .then((val) => 
    console.log(val));
