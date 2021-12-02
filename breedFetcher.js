const request = require('request');

//const breedName = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {
  const URL =  `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(URL, (error, response, body) => {
    if (error) {
      callback(`Failed to request details: ${error}`, null);
      return;
    }
    const data = JSON.parse(body);
    
    if (body === '[]') {
      callback(`Failed to find ${breedName}`, null);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = {fetchBreedDescription};