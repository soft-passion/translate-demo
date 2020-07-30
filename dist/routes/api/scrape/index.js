'use strict';

var express = require('express');

var route = express();

route.get('/', require('./scrape'));

module.exports = route;
//# sourceMappingURL=index.js.map