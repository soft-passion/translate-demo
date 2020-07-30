'use strict';

var _error = require('../constants/error.constant');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _ = require('lodash');

var _require = require('../services'),
    AuthService = _require.AuthService,
    ProfileService = _require.ProfileService;

module.exports = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var token, payload, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = req.headers['authorization'];

            if (!(token === null)) {
              _context.next = 4;
              break;
            }

            throw _error2.default.NO_TOKEN;

          case 4:
            if (token.startsWith('Bearer ')) {
              _context.next = 6;
              break;
            }

            throw _error2.default.INVALID_TOKEN_TYPE;

          case 6:
            payload = AuthService.verifyToken(token.substring(7));

            if (!(payload == null)) {
              _context.next = 9;
              break;
            }

            throw _error2.default.INVALID_TOKE;

          case 9:
            _context.next = 11;
            return ProfileService.findProfileById(payload._id);

          case 11:
            user = _context.sent;

            if (!(user == null)) {
              _context.next = 14;
              break;
            }

            throw _error2.default.INVALID_TOKE;

          case 14:
            req.user = user;
            next();
            _context.next = 22;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context['catch'](0);

            console.log(_context.t0);
            res.status(400).send({
              result: 'error',
              message: _context.t0
            });

          case 22:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 18]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=auth.middleware.js.map