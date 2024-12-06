const myPromise1 = 
  new Promise(function (resolve, reject) {       
    resolve('1');
})
const myPromise2 = 
  new Promise(() => 
    function(resolve, reject){ 
       resolve('2');                                                 
})
myPromise1.then(
  console.log(1, myPromise1));
myPromise2.then(
  console.log(2, myPromise2));