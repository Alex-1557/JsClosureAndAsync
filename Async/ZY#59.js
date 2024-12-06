const d = Promise.withResolvers();
d.resolve(42);
d.promise.then(console.log)