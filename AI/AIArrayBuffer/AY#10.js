//1. Fetching data and converting to ArrayBuffer (browser):

async function fetchDataAsArrayBuffer(url) {
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    // Process the ArrayBuffer (e.g., create a TypedArray)
    const int8View = new Int8Array(arrayBuffer);
    console.log(int8View); // Example: Access the TypedArray
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchDataAsArrayBuffer('/data.bin'); // Example URL
