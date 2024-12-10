let i = 1;

const iteratorList3 = {
    next() {
        if (i <= 3) {
            return { 
                 value: i++, 
                 done: false };
        }
        return { value: undefined, 
                 done: true };
    },
    [Symbol.iterator]() {
        return this;
    },
};

for (const value of iteratorList3) {
    console.log(value);
}
