'use strict';

var _auth = require('./auth.service');

var _auth2 = _interopRequireDefault(_auth);

var _profile = require('./profile.service');

var _profile2 = _interopRequireDefault(_profile);

var _scrape = require('./scrape.service');

var _scrape2 = _interopRequireDefault(_scrape);

var _file = require('./file.service');

var _file2 = _interopRequireDefault(_file);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 This file provides all available service.
*/

module.exports = {
  AuthService: _auth2.default,
  ProfileService: _profile2.default,
  ScrapeService: _scrape2.default,
  FileService: _file2.default
};
//# sourceMappingURL=index.js.map