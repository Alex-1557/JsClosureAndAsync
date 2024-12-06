function sleepRandom(time) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, time * 1e2,
         0 | Math.random() * 1e3);
    });
  }
  
  console.log('Run');                    
  sleepRandom(5).then(result => {
    console.log(result);                 
    return sleepRandom(10);
  }).then(result => {
    console.log(result);                 
  }).then(() => {
    console.log('immediately after');    
    throw Error('Irror!');
  }).then(() => {
    console.log('will not be displayed');
  }).catch(x => console.log(x));  