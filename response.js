const response = (statusCode, message, data, res) => {
   res.status(statusCode).json({
      status_code: statusCode,
      message: message,
      data: data,
   });
};

module.exports = response;
