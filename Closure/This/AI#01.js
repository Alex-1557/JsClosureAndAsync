const delayedResp = {
    delays: [500, 1300, 3500],
    wait(delay) {
      return new Promise((resolve) => {
        setTimeout(resolve, delay);
      });
    },
    async *[Symbol.asyncIterator]() {
      for (const delay of this.delays) {
        await this.wait(delay);
        yield `Delayed ${delay} ms`;
      }
    },
  };
  
(async () => {
  for await (const resp of delayedResp){
    console.log(resp);
  }
})();