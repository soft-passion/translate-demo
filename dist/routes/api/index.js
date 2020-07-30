'use strict';

var express = require('express');

var route = express();

route.use(require('../../middleware/response'));
route.use('/login', require('./auth'));
route.use('/signup', require('./auth'));
route.use(require('../../middleware/auth.middleware'));
route.use('/parse', require('./scrape'));
route.use('/translate', require('./translate'));
route.use('/upload', require('./filemanage'));
route.use('/download', require('./filemanage'));
module.exports = route;
//# sourceMappingURL=index.js.map