const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// connect MongoDB
const dbconnection = require('./middleware/mongodb');

// express app
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: false }));

app.use('/api', require('./routes/api'));

module.exports = app;
