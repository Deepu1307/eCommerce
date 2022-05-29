class ErrorHandler extends Error {
  constructor(massage, statusCode) {
    super(massage);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = ErrorHandler;
