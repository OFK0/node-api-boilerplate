const userModel = require('../database/models').User;

const all = (req, res) => {
    userModel.findAll()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({
                error: true,
                message: 'An error occured',
                stack: err
            })
        });
}

module.exports = {
    all
}