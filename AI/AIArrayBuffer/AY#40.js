//4. Node.js: Reading a file asynchronously into an ArrayBuffer:

import { readFile } from 'fs/promises';

async function readFileToArrayBuffer(filePath) {
  try {
    const buffer = await readFile(filePath); // fs.readFile directly gives you a Buffer in Node.js
    console.log('Buffer from file:', buffer);
    // Or if you really want an ArrayBuffer:
    const arrayBuffer = buffer.buffer.slice(
      buffer.byteOffset,
      buffer.byteOffset + buffer.byteLength,
    );
    console.log('ArrayBuffer from file:', arrayBuffer);

    // TypedArray use is same as in browser:
    const uint8View = new Uint8Array(arrayBuffer);
    // ... process uint8View
  } catch (err) {
    console.error('File read error:', err);
  }
}

readFileToArrayBuffer('binary_file.dat');
