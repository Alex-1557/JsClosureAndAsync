function Promise1() {
    return new Promise((resolve,_)=>{
      setTimeout(() => 
        resolve("a"), 1000);
    });
  }
Promise.all([Promise1(), 
  Promise.reject('instant reject')])
    .then(val => console.log(val))