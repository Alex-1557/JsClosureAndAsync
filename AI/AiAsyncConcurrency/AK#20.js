//Handling multiple AJAX requests concurrently:
async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

async function concurrentRequests() {
  const data1Promise = fetchData('data1.json');
  const data2Promise = fetchData('data2.json');

  const data1 = await data1Promise;
  const data2 = await data2Promise; // Data is fetched concurrently

  console.log('Data 1:', data1);
  console.log('Data 2:', data2);

  // Or using Promise.all for parallel fetching:
  // const [data1, data2] = await Promise.all([data1Promise, data2Promise]);
}

concurrentRequests();
