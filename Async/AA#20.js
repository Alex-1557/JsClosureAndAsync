async function* myGenerator(step) {
  await new Promise((resolve) => 
    setTimeout(resolve, 10));
  yield 0;
  yield step;
  yield step * 2;
}
const gen = myGenerator(2);
gen
  .next()
  .then((res) => {
    console.log(res);
    return gen.next();
  })
  .then((res) => {
    console.log(res);
    return gen.next();
  })
  .then((res) => {
    console.log(res);
    return gen.next();
  })
  .then((res) => {
    console.log(res);
    return gen.next();
  });
