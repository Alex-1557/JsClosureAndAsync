import * as readline 
   from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

await rl.question(`What's your name?`)
  .then((name) => {
     console.log(`Hi ${name}!`);
     rl.close();
});
