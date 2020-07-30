'use strict';
/*
 This file is one for connection to mongodb.
*/

var mongoose = require('mongoose');
var config = require('../config/database.config');
mongoose.connect(config.uri, config.option);
var db = mongoose.connection;
console.log('DB config : ', config);

db.on('error', function (err) {
  console.log(err);
});
db.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});
db.once('open', function () {
  return console.log('connected to databse');
});

module.exports = db;
//# sourceMappingURL=mongodb.js.map