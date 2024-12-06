const myPromise1 = 
  new Promise(function (resolve, _){      
    resolve('1');
})
myPromise1.then(function (value) {
    console.log(
        'onFullFiled =' + value)
});