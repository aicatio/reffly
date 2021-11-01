const mongoose = require('mongoose');

const { customAlphabet } = require('nanoid');
const pattern =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-';
const nanoid = customAlphabet(pattern, 6);

const UrlSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(),
  },
  userId: {
    type: Number,
    default: 0,
  },
  origUrl: {
    type: String,
    required: true,
  },
  clickCount: {
    type: Number,
    default: 0,
  },
  dateCreated: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model('ShortUrl', UrlSchema);
