'use strict';

/*
 This file is one to configure database
*/

var _require = require('./app.config'),
    APP_ENV = _require.APP_ENV,
    APP_NAME = _require.APP_NAME;

var database = {
  production: {
    uri: 'mongodb://localhost:27017/' + APP_NAME + '-production',
    option: {}
  },
  staging: {
    uri: 'mongodb://localhost:27017/' + APP_NAME + '-staging',
    option: {}
  },
  development: {
    uri: 'mongodb://localhost:27017/' + APP_NAME + '-development',
    option: {
      user: 'root',
      pass: 'mochadev',
      auth: { authSource: 'admin' },
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  }
};

module.exports = database[APP_ENV];
//# sourceMappingURL=database.config.js.map