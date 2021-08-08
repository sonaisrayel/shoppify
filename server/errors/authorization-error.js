
const ErrorMessages = require('./error-messages');


class AuthorizationError extends ErrorMessages {
    constructor(message) {
        super({
            message,
            status: 401
        })
    }
}

module.exports = AuthorizationError