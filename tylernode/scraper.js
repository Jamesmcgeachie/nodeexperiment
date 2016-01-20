var request = require('request'),
  cheerio = require('cheerio'),
  fs = require('fs');

var file = fs.createWriteStream('google.html');

request('https://news.ycombinator.com/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(body);
    $('.title a').each(function() {
      console.log($(this).text());
    })
  }
});

