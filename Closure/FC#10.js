function add() {
    let counter = 0;
    function plus() { 
        console.log(counter);
        counter += 1; }
    plus();
    return counter;
}
console.log(
    add(), add(), add());