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
async function sequentialStart() {
  console.log("= sequentialStart starts =", 
    getInterval(new Date()));
  const slow = Delay2();
  console.log(await slow);
  const fast = Delay1();
  console.log(await fast);
  console.log("= sequentialStart done =", 
    getInterval(new Date()));
}
sequentialStart();
