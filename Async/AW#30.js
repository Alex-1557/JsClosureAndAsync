function oneSec(x) {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(x);
        }, 1000);
    });
}
async function f1() {
    const x = await oneSec(10);
    console.log(x);
}
f1();