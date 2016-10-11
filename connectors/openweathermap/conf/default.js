/**
 * this is your configuration file defaults.
 *
 * You can create additional configuration files to that the server will load based on your
 * environment.  For example, if you want to have specific settings for production which are different
 * than your local development environment, you can create a production.js and a local.js.  Any changes
 * in those files will overwrite changes to this file (a object merge is performed). By default, your
 * local.js file will not be commited to git or the registry.
 *
 * This is a JavaScript file (instead of JSON) so you can also perform logic in this file if needed.
 */
module.exports = {
	// these are your generated API keys.  They were generated uniquely when you created this project.
	// DO NOT SHARE these keys with other projects and be careful with these keys since they control
	// access to your API using the default configuration.  if you don't want two different keys for
	// production and test (not recommended), use the key 'apikey'.  To simulate running in production,
	// set the environment variable NODE_ENV to production before running such as:
	//
	// NODE_ENV=production appc run
	//
	// production key, this is the key that will be required when you are running in production
	apikey_production: 'BJ8bwk+rKFzIcRBTKFctRFXbIntsh2UF',
	// development key, this is the key that will be required when you are testing non-production (such as locally)
	apikey_development: 'VeXiAoAR3Gm70z8zWwKkTOKobbFf97F0',
	// preproduction key, this is the key that will be required when you are testing non-production (such as locally)
	apikey_preproduction: 'fJkKxvHlP5jvmdE59ow3lbXsONxSp3D7',

	// by default the authentication strategy is 'basic' which will use HTTP Basic Authorization where the
	// usename is the key and the password is blank.  the other option is 'apikey' where the value of the
	// APIKey header is the value of the key.  you can also set this to 'plugin' and define the key 'APIKeyAuthPlugin'
	// which points to a file or a module that implements the authentication strategy
	APIKeyAuthType: 'basic',

	// The number of milliseconds before timing out a request to the server.
	timeout: 120000,

	// logging configuration
	logLevel: 'debug', // Log level of the main logger.
	logging: {
		// location of the logs if enabled
		logdir: './logs',
		// turn on transaction logs
		transactionLogEnabled: true
	},

	// prefix to use for apis
	apiPrefix: '/api',

	// control the settings for the admin website
	admin: {
		// control whether the admin website is available
		enabled: true,
		// the prefix to the admin website
		prefix: '/arrow',
		// the prefix for the public apidocs website
		apiDocPrefix: '/apidoc',
		// if you set disableAuth, in production only your API docs will show up
		disableAuth: false,
		// if you set disableAPIDoc, your API docs will not show up (regardless of disableAuth)
		disableAPIDoc: false,
		// if you set disableDefault404, Arrow will not register a default 404 handler
		disableDefault404: false,
		// set to true to allow the admin website to be accessed in production. however, you will still need a
		// login unless disableAuth is false. if you set this to false, the admin website will not be enabled
		// when in production (still respects enabled above)
		enableAdminInProduction: true,
		// set the email addresses you want to be able to log in to the admin website
		validEmails: ["vasil@vasilbachev.com"],
		// set the organization ids you want to be able to log in to the admin website
		validOrgs: [100144535]
	},

	// you can generally leave this as-is since it is generated for each new project you created.
	session: {
		encryptionAlgorithm: 'aes256',
		encryptionKey: 'XZknIJipJiC5wDsWStYxlJeic194WLHVyhKvJF636j0=',
		signatureAlgorithm: 'sha512-drop256',
		signatureKey: '4JfdraURdUkZQ2/ETdFNDoIetUf9II1ZoewpIUer6DevVMI0aNve+qvv+ZNZPNTNvfptXTnTOxzpmkBZydNoBQ==',
		secret: 'RAV+wLaYpzDb625I6Os9MXqDqundf5SJ', // should be a large unguessable string
		duration: 86400000, // how long the session will stay valid in ms
		activeDuration: 300000 // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds
	},

	// if you want signed cookies, you can set this value. if you don't want signed cookies, remove or make null
	cookieSecret: 'yj71onmZKr+MDk8xgvLh7tGaNLpiL+U1',

	// your connector configuration goes here
	connectors: {
		'openweathermap': {
			modelAutogen: false,
            api_key: '7e231c627cc3f2a661ad845562cba4fb',
            default_city: 'Sofia',
            units: 'metric'
		}
	}
};
