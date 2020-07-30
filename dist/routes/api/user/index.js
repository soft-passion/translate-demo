'use strict';

var express = require('express');

var route = express();

route.post('/', require('../auth/signup'));

module.exports = route;
//# sourceMappingURL=index.js.map