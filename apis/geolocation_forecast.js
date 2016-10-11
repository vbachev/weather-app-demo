var Arrow = require('arrow');

var GeolocationForecastAPI = Arrow.API.extend({
    group: 'forecast',
    path: '/api/forecast/:lat/:lon',
    method: 'GET',
    description: 'Returns five days of forecasts for a given geographic coordinates',
    model: 'forecast',
    parameters: {
        lat: {
            description: 'Latitude'
        },
        lon: {
            description: 'Longitude'
        }
    },
    action: function (req, resp, next) {
        // invoke the model find method passing the id parameter
        // stream the result back as response
        resp.stream(req.model.query, req.params, next);
    }
});

module.exports = GeolocationForecastAPI;
