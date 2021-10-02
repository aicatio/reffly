const axios = require('axios');
var validUrl = require('valid-url');

const checkUrlExists = async function(Url) {
  if (validUrl.isUri(Url) == false) {
    return false;
  }
  try {
    const response = await axios.get(Url);
    return response.status >= 200 && response.status < 400;
  } catch (err) {
    return false;
  }
};

module.exports = checkUrlExists;
