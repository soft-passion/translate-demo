'use strict';

var _error = require('../constants/error.constant');

var _error2 = _interopRequireDefault(_error);

var _path = require('../constants/path.constant');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var uploadFile = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
    var params = _objectWithoutProperties(_ref2, []);

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            return _context.abrupt('return', params.file.filename);

          case 4:
            _context.prev = 4;
            _context.t0 = _context['catch'](0);

            console.log(_context.t0);
            throw _context.t0;

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 4]]);
  }));

  return function uploadFile(_x) {
    return _ref.apply(this, arguments);
  };
}();

var downloadFile = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(identifier) {
    var file;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (identifier) {
              _context2.next = 2;
              break;
            }

            throw _error2.default.NO_URL;

          case 2:
            _context2.prev = 2;
            file = _path2.default.baseDir + identifier;
            return _context2.abrupt('return', file);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](2);

            console.log(_context2.t0);
            throw _context2.t0;

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[2, 7]]);
  }));

  return function downloadFile(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

module.exports = {
  uploadFile: uploadFile,
  downloadFile: downloadFile
};
//# sourceMappingURL=file.service.js.map