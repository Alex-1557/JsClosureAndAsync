process.on('unhandledRejection', (reason, promise) => 
    console.log('unhandled', reason, promise));
process.on('rejectionHandled', (promise) => 
    console.log('handled', promise));
let promise = Promise.reject(42);
setTimeout(() => promise.catch(() => {}), 1e3);
