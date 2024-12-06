// https://github.com/tj/co
var co = require('co');
// multiple promises in parallel
co(function* () {
  var a = Promise.resolve(1);
  var b = Promise.resolve(2);
  var c = Promise.resolve(3);
  var res = yield [a, b, c];
  console.log(res);
}).catch(onerror);
