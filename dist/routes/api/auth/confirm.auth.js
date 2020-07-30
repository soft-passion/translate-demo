'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require('../../../models/sms.model'),
    Sms = _require.Sms;

var _require2 = require('../../../services'),
    AuthService = _require2.AuthService,
    ProfileService = _require2.ProfileService,
    NotificationSettingService = _require2.NotificationSettingService;

module.exports = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, phone, code, sms, user;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, phone = _req$body.phone, code = _req$body.code;
            _context.prev = 1;

            if (!(!phone || !code)) {
              _context.next = 5;
              break;
            }

            res.error({
              message: 'api.auth.sms-confirm.no-code' //'Please provide code'
            });
            return _context.abrupt('return', next());

          case 5:
            _context.next = 7;
            return Sms.findOne({ phone: phone, code: code });

          case 7:
            sms = _context.sent;

            if (sms) {
              _context.next = 13;
              break;
            }

            res.error({
              message: 'api.auth.sms-confirm.code-expired' //'Code expired'
            });
            return _context.abrupt('return', next());

          case 13:
            _context.next = 15;
            return sms.remove();

          case 15:
            _context.next = 17;
            return ProfileService.findProfileByPhone(phone);

          case 17:
            user = _context.sent;

            if (user) {
              _context.next = 22;
              break;
            }

            _context.next = 21;
            return ProfileService.createProfile({
              phone: phone
            });

          case 21:
            user = _context.sent;

          case 22:

            res.success({
              user: user,
              token: AuthService.generateToken(user),
              message: 'api.auth.sms-confirm.success' //'verification success'
            });
            _context.next = 28;
            break;

          case 25:
            _context.prev = 25;
            _context.t0 = _context['catch'](1);

            res.error({
              message: _context.t0.message
            });

          case 28:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 25]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=confirm.auth.js.map