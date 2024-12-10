class Car {
  constructor() {
    this.sayBye = this.sayBye.bind(this);
  }
  sayHi() {
    console.log(`Hello from ${this.name}`);
  }
  sayBye() {
    console.log(`Bye from ${this.name}`);
  }
  get name() {
    return "Ferrari";
  }
}

class Bird {
  get name() {
    return "Tweety";
  }
}

const car = new Car();
const bird = new Bird();

car.sayHi();
bird.sayHi = car.sayHi;
bird.sayHi();

bird.sayBye = car.sayBye;
bird.sayBye();
car.sayBye();
