const BaseError = require("./baseError");

class ErrorHandler {
    async handleError(err, res) {
        console.log(err);

        if (err instanceof BaseError) {
            return this.sendErrorResponse(res, err.status, err.message, err.originalUrl);
        }

        this.sendErrorResponse(res, 500, 'Unexpected Error');
    }

    sendErrorResponse(res, status, message, originatedFrom) {
        return res.status(status).json({ message, originatedFrom });
    }
}

module.exports = ErrorHandler;