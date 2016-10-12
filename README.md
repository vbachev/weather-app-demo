# weather-app-demo
A weather forecast project based on Arrow. It uses a custom connector to fetch data from the OpenWeatherMap API and feed it to an Arrow API, which in turn is used in the Arrow web app.

## Setup

Install the Arrow API dependencies:

    git clone https://github.com/vbachev/weather-app-demo
    cd weather-app-demo
    npm install

Install the custom connector dependencies:

    cd connectors/openweathermap
    npm install

Run via the Appcelerator CLI

    cd ../..
    appc run

## Components

### Connector

The `openweathermap` connector was generated in order to retrieve data from the OpenWeatherMap API. It uses simple HTTP requests to fetch data which is then converted to `Forecast` model instances. Each `Forecast` instance represents the weather forecast for a single day.

It exposes a single `query` method that supports location name and geolocation search parameters.

### API

The Arrow API exposes two GET endpoints which use the connector's `query` method:

- `/api/forecast/:city` for fetching forecasts based on a location name
- `/api/forecast/:lat/:lon` for fetching forecastst based on geolocation

The data is represented by a single model - `Forecast`

```javascript
var Arrow = require('arrow');
module.exports = Arrow.Model.extend('forecast', {
    fields: {
        city      : { type: String },
        country   : { type: String },
        date      : { type: Date },
        condition : { type: String },
        temp_max  : { type: Number },
        temp_min  : { type: Number }
    },
    connector: 'openweathermap'
});
```

### Web App

The out-of-the-box Arrow Web App serves to demonstrate the API capabilities. It can be accessed at the root URL (e.g. `localhost:8080`) and provides functionality to search for forecasts based on location name or browser geolocation.