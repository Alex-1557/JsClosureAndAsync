const myPromise = 
  new Promise(function (resolve, reject){
    resolve('1'); 
    resolve('2')
    reject(3)
})
const myPromise3 = 
  new Promise(function (resolve, reject){
    reject(3)
})
console.log(1, myPromise)