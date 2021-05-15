const apiError = require('../helpers/error');

const userValidations = require('../validations/user');

const userModel = require('../database/models').User;

const all = (req, res) => {
	userModel
		.findAll()
		.then((data) => {
			res.status(200).json(data);
		})
		.catch(
			() =>
				new apiError(
					{
						code: 500,
					},
					res
				)
		);
};

const create = async (req, res) => {
	userModel
		.create({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			username: req.body.username,
			email: req.body.email,
		})
		.then((rs) => {
			res.status(201).json(rs);
		})
		.catch(() => new apiError({ code: 500 }, res));
};

module.exports = {
	all,
	create,
};
