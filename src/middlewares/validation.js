const joi = require('joi');
const apiError = require('../helpers/error');
const httpStatus = require('http-status');
const { pick } = require('lodash');

module.exports = (schema) => (req, res, next) => {
	const validSchema = pick(schema, ['params', 'query', 'body']);
	const object = pick(req, Object.keys(validSchema));
	const { value, error } = joi
		.compile(validSchema)
		.prefs({ errors: { label: 'key' } })
		.validate(object);

	if (error) {
		const errorMessage = error.details.map((details) => details.message).join(', ');
		return new apiError({ code: httpStatus.BAD_REQUEST, message: errorMessage }, res);
	}
	Object.assign(req, value);
	return next();
};
