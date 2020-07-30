/*
 This file is one to configure database
*/

const { APP_ENV, APP_NAME } = require('./app.config');

const database = {
  production: {
    uri: `mongodb://localhost:27017/${APP_NAME}-production`,
    option: {},
  },
  staging: {
    uri: `mongodb://localhost:27017/${APP_NAME}-staging`,
    option: {},
  },
  development: {
    uri: `mongodb://localhost:27017/${APP_NAME}-development`,
    option: {
      user: 'root',
      pass: 'mochadev',
      auth: { authSource: 'admin' },
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
  },
};

module.exports = database[APP_ENV];
