import fetch from "node-fetch";

class FetchError extends Error {
  constructor(response) {
    super(`HTTP error ${response.status}`);
    this.response = response;
  }
}
async function fetchTxt(...args) {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new FetchError(response);
  }
  return await response.text();
}

fetchTxt(
  "https://dog.ceo/api/breeds/list/alls")
  .then((response) => {
    console.log(1, response);
    return response
  })
  .then((json) => console.log(2));
