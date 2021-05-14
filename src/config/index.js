const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
    path: path.join(__dirname, '../../.env')
})

module.exports = {
    environment: process.env.NODE_ENV || 'development',
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    mysql: {
        host: process.env.MYSQL_HOST || '127.0.0.1',
        port: process.env.MYSQL_PORT,
        database: process.env.MYSQL_DATABASE,
        username: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
    },
    jwt: {
        secret: process.env.JWT_SECRET || '',
        token_expiration_minutes: process.env.JWT_TOKEN_EXPIRATION_MINUTES || 30,
        refresh_expiration_minutes: process.env.JWT_REFRESH_EXPIRATION_DAYS || 2
    },
    smtp: {
        host: process.env.SMTP_HOST || '',
        port: process.env.SMTP_PORT || 587,
        username: process.env.SMTP_USERNAME || '',
        password: process.env.SMTP_PASSWORD || '',
        email: process.env.EMAIL_FROM || ''
    }
}