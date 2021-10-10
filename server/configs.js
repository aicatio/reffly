/**
 * PROJECT SETTINGS
 * ---------------------------------------------------------
 * To replce settings, add a reffconf.js file at prooject root
 * ---------------------------------------------------------
 * root dir process.env.PWD
 */

require = require('esm')(module /*, options*/);
module.exports = require('../reffconf').default;
