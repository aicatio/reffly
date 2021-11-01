const mongoose = require('mongoose');

const AnalyticsSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  urlId: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model('Analytics', AnalyticsSchema);
