const express = require('express');

const route = express();

route.get('/:username/:password', require('./auth'));
route.post('/', require('./signup'));
module.exports = route;
