// browser
function fun() {
  return this;
};
console.log(
    fun(),
    fun(2),
    fun.call(2),
    fun.apply(2),
    fun.bind(2),
    fun.bind(2)()
)
