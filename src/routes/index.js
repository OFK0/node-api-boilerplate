const express = require('express')

const authRoutes = require('./auth.route')
const userRoutes = require('./user.route')

const router = express.Router()

const routes = [
    {
        path: '/auth',
        route: authRoutes,
    },
    {
        path: '/users',
        route: userRoutes,
    },
]

routes.forEach(({ path, route }) => {
    router.use(path, route)
})

module.exports = router
