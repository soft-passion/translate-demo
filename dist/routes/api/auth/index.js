'use strict';

var express = require('express');

var route = express();

route.get('/:username/:password', require('./auth'));
route.post('/', require('./signup'));
module.exports = route;
//# sourceMappingURL=index.js.map