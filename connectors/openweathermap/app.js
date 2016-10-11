/**
 * NOTE: This file is simply for testing this connector and will not
 * be used or packaged with the actual connector when published.
 */
var Arrow = require('arrow'),
	server = new Arrow();

// TODO: Define a model that you can use when you run the connector locally for testing.
server.addModel(Arrow.Model.extend('forecast', {
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
}));

server.start();
