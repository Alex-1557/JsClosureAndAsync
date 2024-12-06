// browser
window.onunhandledrejection = e => 
    console.log(
        'unhandled', e.reason, e.promise);
window.onrejectionhandled = e => 
    console.log(
        'handled', e.reason, e.promise);
let promise = Promise.reject(42);
setTimeout(() => 
    promise.catch(() => {}), 1e3);
