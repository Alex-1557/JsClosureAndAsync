//Promise.all with async/await:
async function parallelFetch() {
  try {
    const [response1, response2] = await Promise.all([
      fetch('data1.json'),
      fetch('data2.json'),
    ]);

    const data1 = await response1.json();
    const data2 = await response2.json();

    console.log('Parallel data:', { data1, data2 });
  } catch (error) {
    console.error('Error in parallel fetch:', error);
  }
}

parallelFetch();
