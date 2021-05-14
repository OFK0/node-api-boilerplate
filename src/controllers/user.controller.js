const apiError = require('../helpers/error')

const userModel = require('../database/models').User

const all = (req, res) => {
    userModel
        .findAll()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(() =>
            res.send(
                new apiError({
                    error: true,
                    code: 500,
                })
            )
        )
}

module.exports = {
    all,
}
