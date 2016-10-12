var Arrow = require('arrow');

var HomeRoute = Arrow.Router.extend({
	name: 'home',
	path: '/',
	method: 'GET',
	description: 'Homepage',
	action: function (req, resp, next) {
		req.server.getModel('forecast').query({}, function(err, results) {
			if (err) {
				next(err);
			} else {
				resp.render('index', {
					forecasts : results
				});
				next();
			}
		});
	}
});

module.exports = HomeRoute;
