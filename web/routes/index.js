var Arrow = require('arrow');

var HomeRoute = Arrow.Router.extend({
	name: 'home',
	path: '/',
	method: 'GET',
	description: 'Homepage',
	action: function (request, response) {
		response.render('index');
	}
});

module.exports = HomeRoute;
