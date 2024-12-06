function sleepRandom(time) {
    return new Promise(
      (resolve, reject) => {
        setTimeout(resolve, time * 1e2, 
          0 | Math.random() * 1e3);
    });
  }
function timeLimit(promise, time) {
    return Promise
       .race([promise, 
        new Promise((resolve, reject) =>{
          setTimeout(reject, time * 1e2, 
            Error(
              'Await > '+ time +' sec'));
    })]);
  }

timeLimit(sleepRandom(5), 10)
    .then(x => console.log(x));   
timeLimit(sleepRandom(15), 10)
    .catch(x => console.log(x));