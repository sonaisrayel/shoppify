class ErrorMessages extends Error {
    constructor(params) {
        const { message, status } = params;
        super();

        this.message = message;
        this.status = status;
        this.ErrorMessages = true;
    }

}

module.exports = ErrorMessages