Promise.any([
    Promise.resolve(1),
    Promise.reject(2),
    Promise.resolve(3),
  ]).then(console.log); 
Promise.any([
    Promise.reject(1),
    Promise.reject(2),
    Promise.reject(3),
  ]).catch(({ errors }) => 
    console.log(errors))