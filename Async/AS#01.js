async function f1() {
  return "1";
}

async function f2() {
  return new Promise((resolve, reject) => {
    resolve(
      setTimeout(resolve("2"), 1000));
  });
}

console.log(
  f1(), await f1(), f2(), await f2());
