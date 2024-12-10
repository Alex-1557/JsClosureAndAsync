const list = {
  entries: { 0: 'a', 1: 'b' },
  [Symbol.iterator]: function(){
    let counter = 0;
    const entries = this.entries;
    return {
      next: function(){
        return {
          value: entries[counter],
          done: !entries
            .hasOwnProperty(counter++)
        }}}}}
for (let item of list)
  console.log(item)