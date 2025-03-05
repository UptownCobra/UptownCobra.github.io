const weatherJs = require('weather-js');
var weather = require('weather-js');

// Options:
// search:     location name or zipcode
// degreeType: F or C
var weatherJSON
weather.find({search: 'Kansas City, MO', degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);

  console.log(JSON.isRawJSON(result));
  weatherJSON = JSON.stringify(result, null, 2);
  logJSON(weatherJSON);
  var weatherParsed = JSON.parse(weatherJSON);
  console.log("Current Temp: " + weatherParsed[0].current.temperature);
  console.log("Location: " + weatherParsed[0].location.name);
});

function logJSON(stuff) {
  console.log(stuff);
}