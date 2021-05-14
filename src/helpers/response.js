const httpStatus = require('http-status');

class Response {

    constructor({ error = false, code = 200, message = '' }) {
        this.error = error;
        this.code = code;
        this.code_description = httpStatus[]
        if (message) this.message = message
    }

    getResponse() {
        let response = {error: this.error}
        if (this.message) response.message = this.message;

    }
}

module.exports = Response;