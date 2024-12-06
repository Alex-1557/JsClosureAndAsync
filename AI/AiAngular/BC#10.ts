//3. Promise to Observable in an Angular component:

import { from } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  /* ... */
})
export class MyComponent {
  constructor() {
    const promise = fetch('data.json').then((response) => response.json());
    const observable = from(promise);

    observable.subscribe((data) => {
      // Use the data in your component
    });
  }
}
