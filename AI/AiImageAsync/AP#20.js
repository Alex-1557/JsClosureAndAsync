//2. Sequential Downloads (for more control):

async function downloadImagesSequential(imageUrls) {
  for (const url of imageUrls) {
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
}

downloadImagesSequential(imageUrls);
