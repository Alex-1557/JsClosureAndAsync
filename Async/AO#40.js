function* gen() {
    try {
        yield 0;
        yield 1;
        yield Promise.resolve(2);
        yield Promise.reject(3);
        yield 4;
        throw 5;
    } finally {
        console.log("called finally");
    }
}
(async () => {
    try {
        for await (const num of gen()){
            console.log(num);
        }
    } catch (e) {
        console.log("caught", e);
    }
})();
try {
    for (const numOrPromise of gen()){
        console.log(numOrPromise);
    }
} catch (e) {
    console.log("caught", e);

}