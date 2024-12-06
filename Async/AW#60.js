let i = 0;
queueMicrotask(function test() {
    i++;
    console.log(1, "microtask",i);
    if (i < 3) {
        queueMicrotask(test);
    }
});
(async () => {
    console.log(2, 
      "async function start");
    for (let i = 1; i < 3; i++){
      await null;
      console.log(3, 
       "async function resume",i);
    }
    await null;
    console.log(4, 
       "async function end");
})();
queueMicrotask(() => {
  console.log(5, 
    "after async function");
});
console.log(6, 'end')