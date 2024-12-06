async function f2() {
    return new Promise(
      (resolve, reject) => 
        {resolve(setTimeout(resolve("2"), 
          1000));
    });
  }
async function f3() {
    return new Promise(
      (resolve, reject) => 
        {resolve(setTimeout(resolve('3'), 
          1000))
    })
}

(async function () {
    const [a, b] = [await f2(),await f3()]
    console.log(a, b)
}
)()