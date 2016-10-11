/**
 * Disconnects from your data store.
 * @param next
 */
exports.disconnect = function (next) {
	this.service = null;
	next();
};
