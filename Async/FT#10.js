import fetch from "node-fetch";

fetch("https://www.omdbapi.com/"+
      "?s=batman&y=2018&apikey=ed4903dc")
  .then((response) => {
    console.log(1, response);
    return response.json();
  })
  .then((json) => console.log(2, json));
