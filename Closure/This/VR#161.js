import { dom } 
    from '../Html/HtmlDom1.js'
const divs = dom
  .window
    .document
      .querySelectorAll("div");

var toggleNav = function () {
    console.log(this); 
};
divs[0]
  .addEventListener('click', 
    toggleNav, false);

divs[0].click()