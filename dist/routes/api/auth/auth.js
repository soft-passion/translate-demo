'use strict';

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require('../../../models/user.model'),
    User = _require.User;

var _require2 = require('../../../services'),
    AuthService = _require2.AuthService;

module.exports = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$params, username, password, user;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$params = req.params, username = _req$params.username, password = _req$params.password;
            _context.prev = 1;

            if (!(!username || !password)) {
              _context.next = 5;
              break;
            }

            res.error({
              message: "Username and password don't be empty"
            });
            return _context.abrupt('return', next());

          case 5:
            _context.next = 7;
            return User.findOne({ username: username });

          case 7:
            user = _context.sent;

            if (user) {
              _context.next = 13;
              break;
            }

            res.error({
              message: "User doesn't exist"
            });
            return _context.abrupt('return', next());

          case 13:
            if (_bcrypt2.default.compare(password, user.password)) {
              _context.next = 16;
              break;
            }

            res.error({
              message: "Password doesn't match"
            });
            return _context.abrupt('return', next());

          case 16:

            res.success({
              user: user,
              token: AuthService.generateToken(user),
              message: 'User Login Success'
            });
            _context.next = 22;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context['catch'](1);

            res.error({
              message: _context.t0.message
            });

          case 22:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 19]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=auth.js.map