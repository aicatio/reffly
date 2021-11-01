
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./reffly.cjs.production.min.js')
} else {
  module.exports = require('./reffly.cjs.development.js')
}
