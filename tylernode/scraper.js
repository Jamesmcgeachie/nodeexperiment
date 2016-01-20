var request = require('request'),
  cheerio = require('cheerio'),
  fs = require('fs');

var file = fs.createWriteStream('google.html');

request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    file.write(body); // Show the HTML for the Google homepage.
  }
});

