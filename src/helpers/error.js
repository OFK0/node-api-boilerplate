const httpStatus = require('http-status');

class ApiError {
	constructor({ code = 200, message = '' }, expressRes) {
		this.error = httpStatus[code];
		this.status = code;
		this.code = code;
		if (message) this.message = message;
		if (typeof expressRes === 'undefined') return this.getResponse();
		return expressRes.status(this.code).json(this.getResponse());
	}

	getResponse() {
		let response = {
			error: this.error,
			code: this.code,
		};
		if (this.message) response.message = this.message;
		return response;
	}
}

module.exports = ApiError;
