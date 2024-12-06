const asyncIt = {
    async *[Symbol.asyncIterator]() {
      yield "hello";
      yield "async";
      yield "iteration!";
    },
  };
  
(async () => {
  for await (const x of asyncIt){
    console.log(x);
  }
})();