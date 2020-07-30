'use strict';

module.exports = function (req, res, next) {
  res.success = function (data) {
    this.status(200).json({
      status: 'success',
      data: data
    });
  };
  res.error = function (data) {
    this.status(200).json({
      status: 'error',
      data: data
    });
  };
  next();
};
//# sourceMappingURL=response.js.map