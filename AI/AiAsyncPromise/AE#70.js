//finally Clause:
fetch('data.json')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error fetching:', error))
  .finally(() => {
    console.log('Request complete (regardless of success or failure)'); // Cleanup tasks, e.g., hide loading indicator
  });
