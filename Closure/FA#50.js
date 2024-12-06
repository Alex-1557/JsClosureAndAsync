class C {
    a = 1;
    autoBoundMethod = () => {
        //--- this inside the arrow function's body will correctly point 
        //to the instance (or the class itself, for static fields). 
        //However, because it is a closure,
        console.log(this.a);
    };
    normalMethod() {
        //Cannot read properties of undefined (reading 'a')
        console.log(this.a)}
}
const c = new C();
c.normalMethod();
c.autoBoundMethod(); 
const { autoBoundMethod, 
        normalMethod } = c;
autoBoundMethod();
normalMethod()
