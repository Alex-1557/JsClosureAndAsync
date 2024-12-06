import fs from 'fs';
const data = fs.readFileSync(
    "./number3.txt", 
    { encoding: 'utf8' });
console.log(data);
