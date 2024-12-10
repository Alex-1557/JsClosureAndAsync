import fetch from "node-fetch";

class FetchError extends Error {
  constructor(response) {
   super(`HTTP error ${response.status}`);
   this.response = response;
  }
}
async function fetchJSON(...args) {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new FetchError(response);
  }
  return await response.json();
}
fetchJSON("https://www.omdbapi.com/"+
  "?s=batman&y=2018&apikey=ed4903d")
  .then((response) => {
    console.log(1, response);
    return response
  })
  .then((json) => console.log(2, json));
