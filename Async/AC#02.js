function final(someInput, callback) {
  callback(`${someInput} and terminated`);
}

function middleware(someInput, callback) {
  return final(
    `${someInput} lanch`, callback);
}

function initiate() {
  const someInput = "this function";
  middleware(someInput, function (result) {
    console.log(result);
  });
}

initiate();
