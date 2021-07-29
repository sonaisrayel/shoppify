
const ErrorMessages = require('./error-messages');


class NotFoundError extends ErrorMessages {
    constructor(message) {
        super({
            message,
            status: 404
        })
    }
}

module.exports = NotFoundError