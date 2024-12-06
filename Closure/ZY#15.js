let number = function numberGenerator() {
    var num = Math.random();
    num++;
    return checkNumber;
    function checkNumber() {
        console.log(num);
        return num;
    }
};
console.log(number, number(), number()(), number()());