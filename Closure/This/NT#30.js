class BetterMap extends Map {
  upsert(key, actions) {
   if (this.has(key)) {
     console.log("update");
     this.set(key, 
       actions.update(this.get(key)));
   } else {
     console.log("insert");
     this.set(key, actions.insert());
   }
  }
}
const map = new BetterMap([["a", 1]]);
console.log(map);
map.upsert("a", {
  update: (value) => value + 1,
  insert: () => 0,
});
console.log(map.get("a"));
