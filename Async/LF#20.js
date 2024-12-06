import { readFileSync } from 'fs';
async function wrapSyncRead() {
    let task = await new Promise((_,_)=>{
        try {
            const data = readFileSync(
                "./number3.txt", 
                { encoding: 'utf8' });
            console.log(1, data);
        } catch (err) {
            console.log(err);
        }
    })
    return data;
  };
console.log(2, wrapSyncRead())