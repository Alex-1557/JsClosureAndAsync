function logThis() {
  "use strict";
  console.log(this);
}

[1, 2, 3]
  .forEach(logThis,{name:"obj"})
