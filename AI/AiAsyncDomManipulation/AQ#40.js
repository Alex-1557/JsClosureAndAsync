//4. Loading and displaying an image:

async function loadImage(url) {
  const img = document.createElement('img');
  img.src = url; // initiate loading
  await new Promise((resolve) => {
    img.onload = resolve;
  }); //wait until image load is complete
  document.getElementById('imageContainer').appendChild(img);
}

loadImage('image.jpg');
