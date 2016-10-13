var request = require('request');

var OWMService = function (config) {
    var service_url = 'http://api.openweathermap.org/data/2.5/forecast/daily' +
        '?cnt=5&mode=json' +
        '&units=' + config.units + 
        '&appid=' + config.api_key;

    function getForecast (params, callback) {
        var requestUrl = service_url;
        
        if(params && params.lat){
            // search by geolocation
            requestUrl += '&lat=' + params.lat + '&lon=' + params.lon;

        } else if(params && params.city){
            // search by city name
            requestUrl += '&q=' + params.city;

        } else {
            // search for the default city
            requestUrl += '&q=' + config.default_city;
        }

        request(requestUrl, function (error, response, body) {
            if(error || response.statusCode != 200){
                return callback(error || 'Response code ' + response.statusCode);
            }

            callback(null, JSON.parse(body));
        });
    }

    return {
        getForecast : getForecast
    };
};

module.exports = OWMService;