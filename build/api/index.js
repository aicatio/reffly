// Export backend 

const connectDB = require('./database');
const urlCreator = require('./routes/create');
const urlRedirector = require('./routes/redirect');
const dashboardApp = require('./routes/statistic');

module.exports = {
  urlRedirector,
  dashboardApp,
  urlCreator,
  connectDB,
}