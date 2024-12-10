function getThisStrict() {
  "use strict";
  return this;
}
Number.prototype.getThisStrict = getThisStrict;
console.log(
     getThisStrict(), typeof (1).getThisStrict());
