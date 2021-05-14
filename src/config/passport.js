const config = require('./index')

const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt

const strategy = new jwtStrategy(
    {
        jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwt.secret,
    },
    (payload, done) => {
        return done(null, false)
    }
)

module.exports = {
    strategy,
}
