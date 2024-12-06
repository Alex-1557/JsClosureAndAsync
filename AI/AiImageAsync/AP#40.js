//4. Limiting Concurrent Downloads (for better resource management):

async function downloadImagesLimited(imageUrls, limit = 2) {
  // Limit to 2 concurrent downloads
  const queue = [...imageUrls]; // Create a queue of URLs

  async function processQueue() {
    while (queue.length > 0) {
      const url = queue.shift(); // Get the next URL from the queue
      await downloadImage(url); // Wait for the download to complete before starting the next
    }
  }

  const downloadPromises = [];

  for (let i = 0; i < limit; i++) {
    downloadPromises.push(processQueue()); // Start limited concurrent downloads
  }

  await Promise.all(downloadPromises); // Wait for all downloads to finish.
}

async function downloadImage(url) {
  // Helper download function
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    document.body.appendChild(img);
  } catch (error) {
    console.error(`Error downloading ${url}:`, error);
  }
}

downloadImagesLimited(imageUrls);
