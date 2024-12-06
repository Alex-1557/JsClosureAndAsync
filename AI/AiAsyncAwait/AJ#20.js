//Sequential Async Operations:
async function processData() {
  try {
    const data1 = await fetch('data1.json').then((r) => r.json());
    const data2 = await fetch(`endpoint/${data1.id}`).then((r) => r.json()); // Use data1 in second request
    console.log('Combined data:', { data1, data2 });
  } catch (error) {
    console.error('Error processing:', error);
  }
}

processData();
