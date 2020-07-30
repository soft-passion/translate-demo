'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require('../../../constants'),
    sms_expire_time = _require.sms_expire_time;

module.exports = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var phone, digits, client, message, oldSms;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            phone = req.body.phone;
            _context.prev = 1;

            if (phone) {
              _context.next = 5;
              break;
            }

            res.error({
              message: 'api.auth.sms-request.no-phone' //'Please provide phone number'
            });
            return _context.abrupt('return', next());

          case 5:

            // Create random verification code - 6 digits
            digits = Math.floor(100000 + Math.random() * 900000);

            // Send sms message

            client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
            _context.next = 9;
            return client.messages.create({
              body: 'Mocha verification code: ' + digits,
              from: process.env.TWILIO_SENDER_NUMBER,
              to: phone
            });

          case 9:
            message = _context.sent;

            if (message.status === 'failed') {
              res.error({
                message: 'api.auth.sms-request.failed' //'Failed to send sms, please try again.'
              });
            }

            // Save sms object for validation
            _context.next = 13;
            return Sms.findOne({ phone: phone });

          case 13:
            oldSms = _context.sent;

            if (!oldSms) {
              _context.next = 21;
              break;
            }

            oldSms.code = digits;
            oldSms.expireAt = Date.now();
            _context.next = 19;
            return oldSms.save();

          case 19:
            _context.next = 23;
            break;

          case 21:
            _context.next = 23;
            return Sms.create({
              phone: phone,
              code: digits
            });

          case 23:

            res.success({
              message: 'api.auth.sms-request.success', // `Verification code sent to ${phone} successfully expires in 5 minutes`,
              expireTime: sms_expire_time
            });
            _context.next = 29;
            break;

          case 26:
            _context.prev = 26;
            _context.t0 = _context['catch'](1);

            res.error({
              message: _context.t0.message
            });

          case 29:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 26]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=request.auth.js.map