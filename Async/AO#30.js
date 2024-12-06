function* gen() {
    yield 0;
    yield 1;
    yield Promise.resolve(2);
    yield Promise.resolve(3);
    yield 4;
}
(async () => {
    for await (const num of gen()) {
        console.log(num);
    }
})();
for (const numOrPromise of gen()) {
    console.log(numOrPromise);
}