//1. File I/O (Asynchronous):

import { readFile } from 'fs/promises'; // Using promises for file reading

async function readFileAsync(filePath) {
  try {
    const data = await readFile(filePath, 'utf8');
    console.log(data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

readFileAsync('myFile.txt');
