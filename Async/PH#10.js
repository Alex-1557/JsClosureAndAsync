function calc(number) {
  const promise = 
    new Promise(function (resolve, reject){
    setTimeout(() => {
      if (typeof number !== "number") {
        return reject(
          new Error("wrong argument type"));
      }
      const result = number * number;
      resolve(result);
    }, 1000);
  });
  return promise;
}
calc("a")
  .then(
    (val) => {
      console.log(val);
    },
    (reason) => {
      console.log("Error " + reason);
    })
  .then(
    calc(2).then(
      (val) => {
        console.log(val);
      },
      (reason) => {
        console.log("Error " + reason);
      }
    ));
