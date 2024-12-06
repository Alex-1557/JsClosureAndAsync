function Sleep(ms) {
   return new Promise(resolve => 
      setTimeout(resolve, ms));
}
const start = Date.now();
for (let i = 0; i < 5; i++) {
   Sleep(1000).then(() => {
      const millis = Date.now() - start
      console.log('+', i,
        `${Math.floor(millis/1000)}`)
  })}
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
      const millis = Date.now() - start
      console.log('-', i, 
       `${Math.floor(millis/1000)}`),1000
  })}

