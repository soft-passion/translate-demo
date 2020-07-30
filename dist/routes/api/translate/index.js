'use strict';

var express = require('express');

var route = express();

route.get('/', require('./translate'));

module.exports = route;
//# sourceMappingURL=index.js.map