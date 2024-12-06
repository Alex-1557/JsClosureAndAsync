//2. Observable to Promise (single value):

import { of } from 'rxjs'; // Example observable, replace with yours.
import { firstValueFrom, lastValueFrom } from 'rxjs'; // For newer RxJS versions (v7+)

const observable = of(1, 2, 3);

async function getValue() {
  // RxJS v7+ (Preferred):
  const value = await firstValueFrom(observable); // Get the first emitted value
  // OR (also RxJS v7+ for the last value):
  // const value = await lastValueFrom(observable); // Get the last emitted value.  Throws if observable doesn't complete.
  console.log('Resolved value:', value); // Output: 1

  // RxJS v6 (Older approach using toPromise - less preferred)
  // try {
  // const value = await observable.toPromise();
  // console.log("Resolved value (toPromise):", value); // Output: 3 (because toPromise waits for completion)
  // } catch (err) {
  // console.error("Observable Error:", err);
  // }
}

getValue();
