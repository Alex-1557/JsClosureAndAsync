class C {
    a = 1;
    autoBoundMethod = () => {
        console.log(this.a);
    };
    normalMethod() {
       //Cannot read properties of undefined (reading 'autoBoundMethod')
       return this
          .autoBoundMethod()}
}
const c = new C();
c.normalMethod();
c.autoBoundMethod(); 

const { autoBoundMethod, 
        normalMethod } = c;
autoBoundMethod();
normalMethod();