import {readFile} 
             from 'fs/promises';
async function AsyncRead() {
  try {
    const data = await readFile(
      "./number3.txt", 
      { encoding: 'utf8' });
    console.log(1, data);
    return data
  } catch (err) {
    console.log(err);
  }
}
console.log(2, AsyncRead())
console.log(3, await AsyncRead())
