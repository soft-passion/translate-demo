'use strict';

var jwt = require('jsonwebtoken');
var _ = require('lodash');
var testKey = "testproject";

function generateToken(user) {
  var content = _.pick(user, ['_id', 'username']);
  return jwt.sign(content, testKey);
}

function verifyToken(token) {
  try {
    return jwt.verify(token, testKey);
  } catch (err) {
    return null;
  }
}

module.exports = {
  generateToken: generateToken,
  verifyToken: verifyToken
};
//# sourceMappingURL=auth.service.js.map