//4. Observable to Promise in an Angular component:

import { of } from 'rxjs'; // Example
import { firstValueFrom } from 'rxjs'; // RxJS v7+

import { Component } from '@angular/core';

@Component({
  /* ... */
})
export class MyComponent {
  async ngOnInit() {
    // Use async/await in lifecycle hook.
    const observable = of(10, 20, 30); // Replace with your observable
    const value = await firstValueFrom(observable); // Get the first value. Use lastValueFrom to get the last.

    console.log(value); // Use the resolved value.
  }
}
