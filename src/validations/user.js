const joi = require('joi');

module.exports = {
	create: {
		body: joi.object().keys({
			firstname: joi.string().required(),
			lastname: joi.string().required(),
			username: joi.string().min(4).max(30).required(),
			email: joi.string().email(),
		}),
	},
};
