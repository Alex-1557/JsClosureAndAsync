//4. Capturing Phase:

// Before the bubbling phase, there's a capturing phase. Events travel down the DOM tree from the window to the target element. You can add capturing listeners using the third argument ( useCapture or options object) to addEventListener:

grandparent.addEventListener(
  'click',
  () => {
    console.log('Grandparent capturing!');
  },
  true,
); // or {capture: true}

grandparent.addEventListener(
  'click',
  () => {
    console.log('Grandparent bubbling!');
  },
  false,
); // Bubbling (default).
