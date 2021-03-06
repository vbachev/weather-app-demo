var Arrow = require('arrow');

/**
 * Queries for particular model records.
 * @param {Arrow.Model} Model The model class being updated.
 * @param {ArrowQueryOptions} options Query options.
 * @param {Function} callback Callback passed an Error object (or null if successful) and the model records.
 * @throws {Error} Failed to parse query options.
 */
exports.query = function(Model, options, callback) {

	this.service.getForecast(options.where, function (error, data) {
		var results = [];
		
		if(error){
			return callback(error);
		}

		for(var i = 0, size = data.list.length; i < size; i++){
			var daylyForecast = data.list[i];

			var weatherCondition = 'unknown';
			if(daylyForecast.weather && daylyForecast.weather.length){
				weatherCondition = daylyForecast.weather[0].description;
			}

			results.push(Model.instance({
				city      : data.city.name,
				country   : data.city.country,
				date      : new Date(daylyForecast.dt * 1000),
				condition : weatherCondition,
				temp_max  : daylyForecast.temp.max,
				temp_min  : daylyForecast.temp.min
			}, true));
		}

		callback(null, results);
	});
};