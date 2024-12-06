//5. Handling HTTP requests (Observable to Promise if necessary):

import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs'; // RxJS v7+
import { Component } from '@angular/core';

@Component({
  /* ... */
})
export class MyComponent {
  constructor(private http: HttpClient) {}

  async getData() {
    // HttpClient returns an Observable
    const observable = this.http.get<any>('data.json');

    try {
      const data = await firstValueFrom(observable); // Convert to Promise and wait for the result.
      // Use data (single value)
    } catch (error) {
      // handle error
    }

    // Or, if you don't need to block execution, just use the Observable.
    // observable.subscribe(data => {  /* Process data */ });
  }
}
