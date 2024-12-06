import { 
  isMainThread, parentPort, workerData, Worker} 
    from 'node:worker_threads';
let __filename  = './Node/TH#10.js'
let x
 if (isMainThread) {
   x = function parseJSAsync(script) {
     return new Promise((resolve, reject) => {
       const worker = new Worker(__filename, {
         workerData: script,
       });
       worker.on('message', resolve);
       worker.on('error', reject);
       worker.on('exit', (code) => {
         if (code !== 0)
           reject(new Error(`Worker stopped ${code}`));
       });
     });
   };
 } else {
   const { parse } = require('some-js-parsing-library');
   const script = workerData;
   parentPort.postMessage(parse(script));
 } 
 x()