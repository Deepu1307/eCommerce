const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.massage = err.massage || "Internal server Error";

  res.status(err.statusCode).json({
    success: false,
    massage: err.massage,
  });
};
