console.log(
   await Array.fromAsync(
    (async function * (){ yield * [1, 2, 3] })(), 
       i => i * i))