const startTime = new Date()
const getInterval = endTime =>  
    Math.round((endTime - startTime)/1000);

(function () {
  new Promise((resolve, reject) => {
    resolve(console.log("Y", 
        getInterval(new Date())));
  });
})();

setTimeout(() => console.log("Z", 
        getInterval(new Date())), 1000);
