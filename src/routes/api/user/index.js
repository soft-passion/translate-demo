const express = require('express');

const route = express();

route.post('/', require('../auth/signup'))

module.exports = route;
