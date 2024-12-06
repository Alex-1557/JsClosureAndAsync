//3. Tracking Download Progress (Individual Images):

// This requires a server that supports the 'Content-Length' header.
async function downloadImageWithProgress(url) {
  const response = await fetch(url);
  const reader = response.body.getReader();
  const contentLength = +response.headers.get('Content-Length');

  let receivedLength = 0;
  const chunks = [];

  while (true) {
    // Read data in chunks
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    chunks.push(value);
    receivedLength += value.length;

    console.log(
      `Progress: ${Math.round((receivedLength * 100) / contentLength)}%`,
    );
  }

  const blob = new Blob(chunks);
  const img = document.createElement('img');
  img.src = URL.createObjectURL(blob);
  document.body.appendChild(img);
}

// Download images one by one with progress:
imageUrls.forEach((url) => downloadImageWithProgress(url));
