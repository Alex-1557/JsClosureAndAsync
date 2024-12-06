//Closures and this

// 2. Arrow function inherits 'this':
function outerArrow() {
    const obj = {
      name: "Outer",
      inner: () => { console.log(this.name); }
    };
    obj.inner(); // 'this' is inherited
    const innerFunc = obj.inner;
    innerFunc(); // 'this' is still inherited
  }
  