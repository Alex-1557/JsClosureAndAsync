//To convert an Observable to a Promise, you can use the toPromise() method (though be aware that it's being deprecated and it may be removed from future versions of RxJS). As an alternative, you can use the firstValueFrom or lastValueFrom operators:
//firstValueFrom:

import { firstValueFrom } from 'rxjs';
import { of } from 'rxjs'; // Example Observable

const myObservable = of(1, 2, 3);

async function getValue() {
  try {
    const value = await firstValueFrom(myObservable);
    console.log('First value:', value); // Outputs 1
  } catch (error) {
    console.error('Error:', error);
  }
}

getValue();
