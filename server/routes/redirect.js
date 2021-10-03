const express = require('express');
const ShortUrl = require('../models/ShortUrl');
require('dotenv').config({ path: './.env' });

const router = express.Router();

router.get('/:urlId', async (req, res) => {
  try {
    const searchUrl = await ShortUrl.findById(req.params.urlId);
    if (searchUrl) {
      res.redirect(searchUrl.origUrl);
    } else {
      res.redirect(process.env.URL_404);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }
});

router.get('/', async (req, res) => {
  res.redirect(process.env.URL_BASE);
});

module.exports = router;
