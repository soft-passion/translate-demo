const _ = require('lodash');

const { AuthService, ProfileService } = require('../services');
import Errors from '../constants/error.constant';

module.exports = async (req, res, next) => {
  try {
    const token = req.headers['authorization'];
    if (token === null) {
      throw Errors.NO_TOKEN;
    }
    if (!token.startsWith('Bearer ')) {
      throw Errors.INVALID_TOKEN_TYPE;
    }
    const payload = AuthService.verifyToken(token.substring(7));
    if (payload == null) {
      throw Errors.INVALID_TOKE;
    }

    const user = await ProfileService.findProfileById(payload._id);
    if (user == null) {
      throw Errors.INVALID_TOKE;
    }
    req.user = user;
    next();
  } catch (err) {
    console.log(err)
    res.status(400).send({
      result: 'error',
      message: err,
    });
  }
};
