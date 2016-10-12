var Arrow = require('arrow');

var parseForecasts = function (forecasts) {
	var forecast = {};
	var maxTemps = [];
	var minTemps = [];
	var days = [];
	var i;

	for(i = 0; i < forecasts.length; i++){
		forecast = forecasts[i];

		// round all temperatures
		forecast.temp_max = Math.round(forecast.temp_max);
		forecast.temp_min = Math.round(forecast.temp_min);

		// collect high and low values
		maxTemps.push(forecast.temp_max);
		minTemps.push(forecast.temp_min);

		// convert forecast model instances to simpler objects
		days.push({
			date : forecast.date.toDateString(),
			temp_max : forecast.temp_max,
			temp_min : forecast.temp_min,
			condition : forecast.condition
		});
	}

	// sort temperatures
	maxTemps.sort(function (a, b) { return a > b; });
	minTemps.sort(function (a, b) { return a > b; });

	return {
		days : days,

		// get the two highest and the two lowest temperatures
		temps : {
			top : maxTemps.slice(-2),
			bottom : minTemps.slice(0, 2)
		},

		// taken from the last forecast model instance (or undefined when no results)
		city : forecast.city,
		country : forecast.country
	};
}

var SearchRoute = Arrow.Router.extend({
	name: 'search',
	path: '/search',
	method: 'GET',
	description: 'Get forecasts for a location',
	action: function (request, response, next) {
		var Forecast = request.server.getModel('forecast');
		Forecast.query(request.query, function(err, results) {
			if (err) {
				next(err);
			} else {
				response.render('search', parseForecasts(results));
				next();
			}
		});
	}
});

module.exports = SearchRoute;
