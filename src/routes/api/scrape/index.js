const express = require('express');

const route = express();

route.get('/', require('./scrape'))

module.exports = route;
