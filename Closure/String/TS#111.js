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
  
const t2Closure = 
    template`${0} ${"foo"}!`;
console.log(3, 
    t2Closure("Hello", { foo: "World" })); 

const t2Closure1 = 
    template(["", " ", "!"], 0, "foo");
console.log(4, 
    t2Closure1(["", " ", "!"], 0, "foo")); 