(function (sloppy) {
  "use strict";
  function strict() {
    console.log('1');
  }
  strict();
  sloppy();
  console.log(this);
})(sloppy);

function sloppy() {
  console.log('2');
}

sloppy()