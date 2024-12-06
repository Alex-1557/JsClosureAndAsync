//1. Basic Parallel Downloads with Promise.all:

async function downloadImages(imageUrls) {
  try {
    const promises = imageUrls.map((url) =>
      fetch(url).then((response) => response.blob()),
    );
    const blobs = await Promise.all(promises); // Download in parallel

    blobs.forEach((blob, index) => {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(blob);
      document.body.appendChild(img);
    });
  } catch (error) {
    console.error('Error downloading images:', error);
  }
}

const imageUrls = [
  'image1.jpg',
  'image2.png',
  'image3.gif',
  // ... more image URLs
];

downloadImages(imageUrls);
