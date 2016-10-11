var OWMService = require('../openweathermap');

/**
 * Connects to your data store; this connection can later be used by your connector's methods.
 * @param next
 */
exports.connect = function (next) {
	this.service = new OWMService(this.config);
	next();
};
