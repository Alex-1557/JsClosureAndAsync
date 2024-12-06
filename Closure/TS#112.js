function template(strings, ...keys) {
    return (...values) => {
      const dict = 
         values[values.length - 1] || {};
      const result = [strings[0]];
      keys.forEach((key, i) => 
         {
           const value = Number.isInteger(key) 
           ? values[key] 
           : dict[key];
           result.push(value, strings[i + 1]);
      });
      return result.join("");
    };
  }

const t3Closure1 = 
  template`I'm ${"name"}. I'm ${"age"}.`;
console.log(5, 
  t3Closure1("foo",{ name: "MDN", age: 30 })); 
console.log(6, 
  t3Closure1({ name: "MDN", age: 30 })); 

const t3Closure2 = 
  template(["I'm ", ". I'm ", "."], 
     "name", "age");
console.log(7, t3Closure2()) 
