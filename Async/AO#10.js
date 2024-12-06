const LIMIT = 3;
const asyncIter = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next() {
        const done = i === LIMIT;
        const value = 
          done ? undefined : i++;
        return Promise
          .resolve({ value, done });
      },
      return() {
        return { done: true };
      },
    };
  },
};
(async () => {
  for await (const num of asyncIter){
    console.log(num);
  }
})();
