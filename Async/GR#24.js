const startTime = new Date()
const getInterval = endTime =>  
    Math.round((endTime - startTime)/1000);

const wait = ms => new Promise(resolve => 
    setTimeout(resolve, ms));
    
(async function () {
  console.log("Y", getInterval(new Date()));
  await wait(1000);
})();

setTimeout(() => console.log("Z",
    getInterval(new Date())), 1000);
