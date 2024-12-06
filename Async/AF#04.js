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
async function concurrent1() {
  console.log("= concurrent1 starts =", 
    getInterval(new Date()));
  const results = await Promise
    .all([Delay2(), Delay1()]);
  console.log(results[0]);
  console.log(results[1]);
  console.log("= concurrent1 done ="), 
  getInterval(new Date());
}

setTimeout(concurrent1, 7000);
