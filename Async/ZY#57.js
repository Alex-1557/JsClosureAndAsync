Promise.allSettled([
    Promise.resolve(1),
    Promise.reject(2),
    Promise.resolve(3),
  ]).then(console.log);