const httpStatus = require('http-status');

class Response {

    constructor({ error = false, code = 200, message = '' }) {
        this.error = error;
        this.code = code;
        this.code_description = httpStatus[this.code];
        if (message) this.message = message

        return this.getResponse()
    }

    getResponse() {
        let response = {
            error: this.error,
            code: this.code,
            code_description: this.code_description
        }
        if (this.message) response.message = this.message;
        return response;
    }
}

module.exports = Response;