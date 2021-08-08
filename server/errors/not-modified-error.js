
const ErrorMessages = require('./error-messages');


class NotModifiedError extends ErrorMessages {
    constructor(message) {
        super({
            message,
            status: 304
        })
    }
}

module.exports = NotModifiedError