const request = require('request');

const args = process.argv.slice(2);
const breed = args[0];
const URL =  `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(URL, (error, response, body) => {
  const data = JSON.parse(body);

  if (error) {
    throw error;
  }

  if (body === '[]') {
    console.log("Breed not found :(");
  } else {
    console.log(data[0].description);
  }
});