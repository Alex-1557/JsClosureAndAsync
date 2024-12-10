function foo() {
    for (const value of arguments) {
        console.log(value);
    }
}
foo(
    ...[Function('return this'), class {},  
        "A", "2", "B", 1, new class C {},
        true, {}, "𠮷", [], this === global,
        null, , undefined, NaN, this]
);