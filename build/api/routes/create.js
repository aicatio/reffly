const express = require('express');
const ShortUrl = require('../models/ShortUrl');
const checkUrlExists = require('../utils/url-exists');

const router = express.Router();

router.post('/url/create', async (req, res) => {
  const { origUrl } = req.body;
  const status = await checkUrlExists(origUrl);

  if (status == false) {
    res.status(200).json({
      status: 'failed',
      message: "Requested Url doesn't exists.",
    });
    return;
  }

  try {
    let oldUrl = await ShortUrl.findOne({ origUrl });
    if (oldUrl) {
      const shortUrl = `${process.env.URL_WEB}/${oldUrl._id}`;
      res.status(200).json({ status: 'success', shortUrl });
      return;
    }

    let urlSchema = new ShortUrl({ origUrl });
    let newUrl = await urlSchema.save();
    if (newUrl) {
      const shortUrl = `${process.env.URL_WEB}/${newUrl._id}`;
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
