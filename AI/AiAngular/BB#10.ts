import { Observable, of } from 'rxjs'; // Import of for the demo
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: ` <p>Data: {{ myData$ | async }}</p> `,
})
export class MyComponent {
  myData$: Observable<string>;

  constructor() {
    // Example using 'of' (replace with HttpClient.get or other async source):
    this.myData$ = of('Initial Value').pipe(
      // Example delayed update
      delay(2000),
      map((val) => val + ' (Updated)'),
    );
  }
}

//myData$ is an Observable.
//The async pipe in the template ({{ myData$ | async }}) subscribes to myData$.
//The template initially displays "Initial Value".
//After a 2-second delay, the observable emits "Initial Value (Updated)" and the view updates automatically.