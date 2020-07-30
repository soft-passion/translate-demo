'use strict';
/*
 This file is one for connection to mongodb.
*/

const mongoose = require('mongoose');
const config = require('../config/database.config');
mongoose.connect(config.uri, config.option);
const db = mongoose.connection;
console.log('DB config : ', config);

db.on('error', (err) => {
  console.log(err);
});
db.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});
db.once('open', () => console.log('connected to databse'));

module.exports = db;
