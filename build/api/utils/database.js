const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URL_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
