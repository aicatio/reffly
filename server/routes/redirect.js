const express = require('express');
const ShortUrl = require('../models/ShortUrl');
const configs = require('../configs');
require('dotenv').config({ path: './.env' });

const router = express.Router();

router.get('/:urlId', async (req, res) => {
  try {
    const searchUrl = await ShortUrl.findById(req.params.urlId);
    if (searchUrl) {
      res.redirect(searchUrl.origUrl);
    } else {
      res.redirect(configs.url_web + '/404');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }
});

router.get('/', async (req, res) => {
  res.redirect(configs.url_web);
});

module.exports = router;
