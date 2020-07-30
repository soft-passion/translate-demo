'use strict';

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _user = require('../models/user.model');

var _error = require('../constants/error.constant');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/*
 This file provides apis related with profile.
*/
var _ = require('lodash');


/*
 * Create new profile
 *
 * @ Required params
 * @@ phone (String : Required)
 *
 * @ return created User Object
 *
 */
var createProfile = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
    var params = _objectWithoutProperties(_ref2, []);

    var username, password, hashPwd, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            username = params.username, password = params.password;

            if (!(!username || !password)) {
              _context.next = 3;
              break;
            }

            throw _error2.default.NO_PARAM;

          case 3:
            _context.prev = 3;
            _context.next = 6;
            return _bcrypt2.default.hash(password, 10);

          case 6:
            hashPwd = _context.sent;
            _context.next = 9;
            return _user.User.create({
              username: username,
              password: hashPwd
            });

          case 9:
            user = _context.sent;
            return _context.abrupt('return', user);

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](3);
            throw _context.t0;

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[3, 13]]);
  }));

  return function createProfile(_x) {
    return _ref.apply(this, arguments);
  };
}();

var findProfileById = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
    var user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            user = void 0;
            // To do : find from cache

            if (user) {
              _context2.next = 6;
              break;
            }

            _context2.next = 5;
            return _user.User.findOneById(id);

          case 5:
            user = _context2.sent;

          case 6:
            return _context2.abrupt('return', user);

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2['catch'](0);
            throw _context2.t0;

          case 12:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 9]]);
  }));

  return function findProfileById(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

module.exports = {
  createProfile: createProfile,
  findProfileById: findProfileById
};
//# sourceMappingURL=profile.service.js.map