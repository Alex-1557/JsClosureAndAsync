const obj = {
    i: 10,
    b: () => console.log(
               1, this?.i, this),
    c() {
        console.log(
               2, this?.i, this);
    },
};
obj.b(); 
obj.c(); 