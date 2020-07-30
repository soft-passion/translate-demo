const request = require('async-request');
const cheerio = require('cheerio');
const {Translate} = require('@google-cloud/translate').v2;
const translate = new Translate({});

import Errors from '../constants/error.constant';

const parseUrl = async (url) => {
  if (!url) {
    throw Errors.NO_URL;
  }
  try {
    const response = await request(url);
    if (response.err) {
      throw Errors.PARSE_ERROR;
    } else {
      let $ = cheerio.load(response.body);
      let title = $('title').text();
      let favicon = $('link[rel="shortcut icon"]').attr('href') || $('link[rel=icon]').attr('href');
      let snippet = $('.shortdescription').contents().first().text();
      let thumbImage = $('.thumbimage').attr('src');
      const data = {
        title, 
        favicon,
        'large-image':thumbImage,
        snippet
      }
      return data
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const translateUrl = async (url) => {
  if (!url) {
    throw Errors.NO_URL;
  }
  try {
    const response = await request(url);
    if (response.err) {
      throw Errors.PARSE_ERROR;
    } else {
      const text = response.body;
      const target = 'ru';
      const [translation] = await translate.translate(text, target);
      console.log(`Translation: ${translation}`);
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  parseUrl,
  translateUrl
};