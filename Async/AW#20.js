const aThenable = {
    then(onFulfilled, onRejected) {
        onFulfilled({
            then(onFulfilled, onRejected){
                onFulfilled(42);
            },
        });
    },
};
(async () => {
    console.log(
        await Promise.resolve(aThenable))
})();
