import fetch from "node-fetch";

async function downloadTxt(url) {
  const response = await fetch(url, {
    mode: "no-cors",
  });
  const txt = await response.text();
  console.log(1);
  return txt;
}

let txt = downloadTxt("https://dog.ceo/"+
                   "api/breeds/list/all")
             .then((x)=>console.log(2,x))
console.log(3, txt)