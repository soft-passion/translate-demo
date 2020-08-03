const express = require('express');

const route = express();
const authMiddleWare = require('../../middleware/auth.middleware');
const resMiddleWare  = require('../../middleware/response');

route.use('/translate', authMiddleWare, require('./translate'));
route.use('/login', resMiddleWare, require('./auth'));
route.use('/signup', resMiddleWare, require('./auth'));

route.use('/parse', authMiddleWare, resMiddleWare, require('./scrape'));
route.use('/upload',  authMiddleWare, resMiddleWare, require('./filemanage'));
route.use('/download',  authMiddleWare, resMiddleWare, require('./filemanage'));
module.exports = route;
