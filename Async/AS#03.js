async function f2() {
  return new Promise(
      (resolve, reject) => 
        {resolve(setTimeout(resolve("2"), 
          1000));
  });
}

(async function () {
  console.log(await f2());
})();
