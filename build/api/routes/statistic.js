const express = require('express');
const router = express.Router();

router.get('/test', async (req, res) => {
  try {
    res.json({ success: 'ok' });
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }
});

module.exports = router;
