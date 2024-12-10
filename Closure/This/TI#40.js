function logThis() {
  "use strict";
  console.log(this,arguments);
}
[5, 6, 7].forEach(logThis);
