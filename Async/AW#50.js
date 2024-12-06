async function f4() {
    try {
        const z = 
           await Promise.reject(30);
    } catch (e) {
        console.error(e); 
    }
}
f4();