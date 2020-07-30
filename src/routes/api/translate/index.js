const express = require('express');

const route = express();

route.get('/', require('./translate'))

module.exports = route;
