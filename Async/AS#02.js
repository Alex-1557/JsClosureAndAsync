async function f2() {
  return new Promise(
      (resolve, reject) => 
        {resolve(setTimeout(resolve("2"), 
           1000));
  });
}

f2().then((val) => 
  console.log(val));
