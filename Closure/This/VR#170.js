import { dom } 
   from '../Html/HtmlDom1.js'
const divs = dom
  .window
    .document.querySelectorAll("div");

for (var i = 0; i < divs.length; i++){
    (function () {
        console.log(this);
    }).call(divs[i].id);
}
