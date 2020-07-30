'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _error = require('../constants/error.constant');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var request = require('async-request');
var cheerio = require('cheerio');

var Translate = require('@google-cloud/translate').v2.Translate;

var translate = new Translate({});

var parseUrl = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var response, $, title, favicon, snippet, thumbImage, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (url) {
              _context.next = 2;
              break;
            }

            throw _error2.default.NO_URL;

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return request(url);

          case 5:
            response = _context.sent;

            if (!response.err) {
              _context.next = 10;
              break;
            }

            throw _error2.default.PARSE_ERROR;

          case 10:
            $ = cheerio.load(response.body);
            title = $('title').text();
            favicon = $('link[rel="shortcut icon"]').attr('href') || $('link[rel=icon]').attr('href');
            snippet = $('.shortdescription').contents().first().text();
            thumbImage = $('.thumbimage').attr('src');
            data = {
              title: title,
              favicon: favicon,
              'large-image': thumbImage,
              snippet: snippet
            };
            return _context.abrupt('return', data);

          case 17:
            _context.next = 23;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context['catch'](2);

            console.log(_context.t0);
            throw _context.t0;

          case 23:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[2, 19]]);
  }));

  return function parseUrl(_x) {
    return _ref.apply(this, arguments);
  };
}();

var translateUrl = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url) {
    var response, text, target, _ref3, _ref4, translation;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (url) {
              _context2.next = 2;
              break;
            }

            throw _error2.default.NO_URL;

          case 2:
            _context2.prev = 2;
            _context2.next = 5;
            return request(url);

          case 5:
            response = _context2.sent;

            if (!response.err) {
              _context2.next = 10;
              break;
            }

            throw _error2.default.PARSE_ERROR;

          case 10:
            text = response.body;
            target = 'ru';
            _context2.next = 14;
            return translate.translate(text, target);

          case 14:
            _ref3 = _context2.sent;
            _ref4 = _slicedToArray(_ref3, 1);
            translation = _ref4[0];

            console.log('Translation: ' + translation);

          case 18:
            _context2.next = 24;
            break;

          case 20:
            _context2.prev = 20;
            _context2.t0 = _context2['catch'](2);

            console.log(_context2.t0);
            throw _context2.t0;

          case 24:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[2, 20]]);
  }));

  return function translateUrl(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = {
  parseUrl: parseUrl,
  translateUrl: translateUrl
};
//# sourceMappingURL=scrape.service.js.map