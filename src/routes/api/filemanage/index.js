const express = require('express');
const route = express();
const multer = require('multer');
const fs = require('fs');

import UploadPath from '../../../constants/path.constant';
let fileName = '';

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    var targetDir = UploadPath.baseDir
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir)
    }
    cb(null, targetDir)
  },
  filename: function (req, file, cb) {
    fileName = Date.now() + '_' + file.originalname
    cb(null, fileName)
  }
})

route.post('/', multer({ storage: storage }).single('file'), require('./upload'))
route.get('/:identifier', require('./download'));
module.exports = route;