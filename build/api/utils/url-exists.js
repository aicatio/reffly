const axios = require('axios');

const checkUrlExists = async function(Url) {
  try {
    const response = await axios.get(Url);
    return response.status >= 200 && response.status < 400;
  } catch (err) {
    return false;
  }
};

module.exports = checkUrlExists;
