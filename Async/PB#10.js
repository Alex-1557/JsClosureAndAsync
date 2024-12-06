function Log(prm){
    prm.then(val => 
        console.log(val))
}
const somePr = new Promise(
    (resolve, _) => 
        resolve("ok 1")
)
Log(somePr)
