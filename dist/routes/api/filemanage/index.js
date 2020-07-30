'use strict';

var _path = require('../../../constants/path.constant');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var route = express();
var multer = require('multer');
var fs = require('fs');

var fileName = '';

var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    var targetDir = _path2.default.baseDir;
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir);
    }
    cb(null, targetDir);
  },
  filename: function filename(req, file, cb) {
    fileName = Date.now() + '_' + file.originalname;
    cb(null, fileName);
  }
});

route.post('/', multer({ storage: storage }).single('file'), require('./upload'));
route.get('/:identifier', require('./download'));
module.exports = route;
//# sourceMappingURL=index.js.map