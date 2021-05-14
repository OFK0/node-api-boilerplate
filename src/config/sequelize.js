const config = require('./index');

module.exports = {
    development: {
        ...config.mysql,
        dialect: 'mysql'
    },
    production: {
        ...config.mysql,
        dialect: 'mysql'
    },
    test: {
        ...config.mysql,
        dialect: 'mysql'
    },
}