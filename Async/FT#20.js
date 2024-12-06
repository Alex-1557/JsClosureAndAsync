import fetch from "node-fetch";

async function downloadTxt(url) {
  const response = await fetch(url, {
    mode: "no-cors",
  });
  const txt = await response.text();
  console.log(3);
  return txt;
}

(async () => {
  const txt = await downloadTxt(
    "https://dog.ceo/api/breeds/list/all");
  console.log(4, txt);
})();
