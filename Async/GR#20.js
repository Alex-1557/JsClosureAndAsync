const startTime = new Date()
const getInterval = endTime =>  
    Math.round((endTime - startTime)/1000);

setTimeout(() => console.log("X",  
    getInterval(new Date())), 1000);

(function () {
  new Promise((resolve, reject) => {
    console.log("W", getInterval(new Date()));
    setTimeout(() => 
        resolve(console.log("Y",  
            getInterval(new Date())), 1000));
  });
})();

console.log("Z", getInterval(new Date()));
