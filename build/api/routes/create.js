const express = require('express');
const ShortUrl = require('../models/ShortUrl');
const validUrl = require('valid-url');
const sanitize = require('mongo-sanitize');

const checkUrlExists = require('../utils/url-exists');
const configs = require('../configs');
const router = express.Router();

router.post('/url/create', async (req, res) => {
  const { origUrl } = req.body;
  if (validUrl.isUri(origUrl) == false) {
    res.status(200).json({
      status: 'failed',
      message: 'Invalid Url provided.',
    });
    return;
  }

  const status = await checkUrlExists(origUrl);
  if (status == false) {
    res.status(200).json({
      status: 'failed',
      message: "Requested Url doesn't exists.",
    });
    return;
  }

  try {
    let oldUrl = await ShortUrl.findOne({ origUrl: { $eq: origUrl } });
    if (oldUrl) {
      const shortUrl = `${configs.url_fwd}/${oldUrl._id}`;
      res.status(200).json({ status: 'success', shortUrl });
      return;
    }

    let urlSchema = new ShortUrl({ origUrl: sanitize(origUrl) });
    let newUrl = await urlSchema.save();
    if (newUrl) {
      const shortUrl = `${configs.url_fwd}/${newUrl._id}`;
      res.status(200).json({ status: 'success', shortUrl });
      return;
    }

    res.status(200).json({
      status: 'failed',
      message: 'Network Error, Please try again later.',
    });
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }
});

module.exports = router;
