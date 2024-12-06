(function () {
    console.log(1)
    return
})();
(() => {
    console.log(2)
    return
})();
(async () => {
    console.log(3)
    return
})();
!function () {
    console.log(4);
}();