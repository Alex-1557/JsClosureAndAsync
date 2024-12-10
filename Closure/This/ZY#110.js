let buffer = 
  Int8Array.of(1, 2, 3, 4, 5, 6, 7, 8).buffer;
console.log(
  buffer.byteLength,
  buffer.detached); 