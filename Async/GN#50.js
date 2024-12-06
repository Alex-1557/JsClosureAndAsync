async function* foo1() {
    yield await Promise.resolve('a');
    yield await Promise.resolve('b');
    yield await Promise.resolve('c');
}

let str1 = '';

async function generate() {
    for await (const val of foo1()) {
        str1 = str1 + val;
    }
    console.log(5, str1);
}

generate();