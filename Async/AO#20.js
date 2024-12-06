async function* asyncGen() {
    let i = 0;
    while (i < 3) {
        yield i++;
    }
}
(async () => {
    for await (const num of asyncGen()){
        console.log(num);
    }
})();