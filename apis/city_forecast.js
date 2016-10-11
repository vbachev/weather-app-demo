var Arrow = require('arrow');

var CityForecastAPI = Arrow.API.extend({
	group: 'forecast',
	path: '/api/forecast/:city',
	method: 'GET',
	description: 'Returns five days of forecasts for a given city',
	model: 'forecast',
	parameters: {
		city: {
			description: 'City name'
		}
	},
	action: function (req, resp, next) {
		// invoke the model find method passing the id parameter
		// stream the result back as response
		resp.stream(req.model.query, req.params, next);
	}
});

module.exports = CityForecastAPI;
