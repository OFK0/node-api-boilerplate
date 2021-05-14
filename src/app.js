// libraries
const express = require('express');
const xss = require('xss-clean');
const helmet = require('helmet');
const passport = require('passport');
const cors = require('cors');

// server configuration
const config = require('./config');

const app = express();

app.use(helmet());
app.use(xss());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(passport.initialize());
passport.use('jwt', require('./config/passport').strategy);

const routes = require('./routes');
app.use('/', routes)

app.use('*', (req, res) => {
    res.status(404)
        .json({
            error: true,
            code: 404,
            message: 'Not found'
        })
})

app.listen(config.port, () => {
    console.warn('ENVIRONMENT :: ', config.environment);

    console.log(`Listening... PORT: ${config.port}`);
})