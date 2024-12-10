import { Element } from 'html-element';

class MyElement extends Element {
    #xValue = 0;
    constructor() {
        super();
        this.onclick = 
           this.#clicked.bind(this);
    }
    get #xxxx() {
        console.log('get')
        return this.#xValue;
    }
    set #xxxx(value) {
        console.log('set')
        this.#xValue = value;
    }
    #clicked() {
        console.log('Element clicked');
         this.#xValue++;
         return this.#xValue
    }
    clickedCount() {
        console.log('Element clicked');
         this.#xValue++;
         return this.#xValue
    }
}
const customElement = new MyElement()
customElement.xxxx = 10;
console.log(customElement.xxxx)
console.log(customElement.clicked)
console.log(customElement.clickedCount())
