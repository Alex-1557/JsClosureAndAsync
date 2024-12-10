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


const t1Closure = 
   template`${0}${1}${0}!`;
console.log(1, t1Closure("Y", "A")); 

const t1Closure1 = 
   template(["", "", "", "!"], 0, 1, 0);
console.log(2, t1Closure1("Y", "A")) 