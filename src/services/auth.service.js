const jwt = require('jsonwebtoken');
const _ = require('lodash');
const testKey = "testproject"

function generateToken(user) {
  const content = _.pick(user, ['_id', 'username']);
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
  generateToken,
  verifyToken,
};
