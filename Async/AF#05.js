const startTime = new Date();
const getInterval = (endTime) => 
  Math.round((endTime - startTime) / 1000);

function Delay2() {
  console.log("starting slow promise", 
    getInterval(new Date()));
  return new Promise((resolve) => {
    setTimeout(() => {resolve("slow");
      console.log("slow promise is done", 
        getInterval(new Date()));
    }, 2000);
  });
}
function Delay1() {
  console.log("starting fast promise", 
    getInterval(new Date()));
  return new Promise((resolve) => {
    setTimeout(() => {resolve("fast");
      console.log("fast promise is done", 
        getInterval(new Date()));
    }, 1000);
  });
}
async function concurrent2() {
    console.log("= concurrent2 starts =", 
      getInterval(new Date()));
    await Promise.all([
        (async () => console.log(await Delay2()))(),
        (async () => console.log(await Delay1()))(),
    ]);
    console.log("= concurrent2 done =", 
      getInterval(new Date()));
}
setTimeout(concurrent2, 7000);
