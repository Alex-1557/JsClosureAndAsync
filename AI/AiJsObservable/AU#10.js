//1. Promise to Observable:

import { from } from 'rxjs';

const promise = fetch('data.json').then((response) => response.json());

const observable = from(promise); // Convert Promise to Observable

observable.subscribe((data) => {
  console.log('Data from Observable:', data);
});
