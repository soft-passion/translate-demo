'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

// connect MongoDB
var dbconnection = require('./middleware/mongodb');

// express app
var app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: false }));

app.use('/', require('./routes/api'));

module.exports = app;
//# sourceMappingURL=app.js.map