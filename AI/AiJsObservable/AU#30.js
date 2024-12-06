//You can convert a Promise to an Observable using from from RxJS:

import { from } from 'rxjs';

const myPromise = new Promise((resolve, reject) => {
  // Resolve or reject the promise based on some condition
  if (Math.random() > 0.5) {
    resolve('Success!');
  } else {
    reject('Error!');
  }
});

const myObservable = from(myPromise);

myObservable.subscribe({
  next: (value) => console.log('Success:', value),
  error: (err) => console.error('Error:', err),
  complete: () => console.log('Complete'),
});
