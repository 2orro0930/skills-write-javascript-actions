const axios = require("axios");

async function getJoke() {
  const res = await axios.get("https://icanhazdadjoke.com/", {
    headers: { 
      Accept: "application/json",
      "User-Agent": "GitHub Action"
    }
  });
  return res.data.joke;
}

module.exports = getJoke;
