var unirest = require('unirest');
var express = require('express');
var app = express();
app.get('/', function(req, res){
    unirest.get("https://community-open-weather-map.p.rapidapi.com/weather")
      .header("X-RapidAPI-Key", "98dc0f0402msh27da9f9ed7c338bp144148jsn25fd970a5e46")
      .header("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com")
      .query({
          'lon': '12.4924',
          'lat': '41.8902',
          'units': 'metric',
          'mode': 'html'
      })
      .end(function (result) {
          res.writeHead(200, {"Content-Type": "text/html"});
          res.write(result.body);
          console.log('Colosseum, I am coming!');
      });
    })
    app.listen(8081, function(){
      console.log('Server running at https://127.0.0.1:8081/');
    })

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lang=en",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
		"x-rapidapi-key": "98dc0f0402msh27da9f9ed7c338bp144148jsn25fd970a5e46"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});