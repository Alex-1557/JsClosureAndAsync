function sleepRandom(time) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, time * 1e2, 0 | 
        Math.random() * 1e3);
    });
 }
Promise.all([
    'foo',
    sleepRandom(5),
    sleepRandom(15),
    sleepRandom(10)         
]).then(x => console.log(x));