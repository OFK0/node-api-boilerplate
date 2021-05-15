// libraries
const express = require('express');
const xss = require('xss-clean');
const helmet = require('helmet');
const passport = require('passport');
const cors = require('cors');

// server configuration
const config = require('./config');

// initialize express app
const app = express();

app.use(helmet());
app.use(xss());
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(cors());

// passport-jwt
app.use(passport.initialize());
passport.use('jwt', require('./config/passport').strategy);

// initialize predefined express routes
const routes = require('./routes');
app.use('/', routes);

const apiError = require('./helpers/error');
app.use(
	'*',
	(req, res) =>
		new apiError(
			{
				code: 404,
			},
			res,
			req
		)
);

app.listen(config.port, () => {
	console.warn('ENVIRONMENT :: ', config.environment);

	console.log(`Listening... PORT: ${config.port}`);
});
