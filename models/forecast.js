var Arrow = require('arrow');

module.exports = Arrow.Model.extend('forecast', {
	fields: {
		city: {
			type: String
		},
		country: {
			type: String
		},
		date: {
			type: Date
		},
		condition: {
			type: String
		},
		temp_max: {
			type: Number
		},
		temp_min: {
			type: Number
		}
	},
	connector: 'openweathermap'
});