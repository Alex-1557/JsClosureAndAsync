import { dom } from '../Html/HtmlDom1.js'
const divs = dom
   .window
      .document
        .querySelectorAll("div");

divs[0].addEventListener('click', 
        toggleNav, false);

function toggleNav(arg1) {
    console.log(this);
}


for (var i = 0; i < divs.length; i++){
    divs[i]
      .addEventListener('click', 
         toggleNav.bind(this, divs[i].id), 
           false);
}

divs[0].click()