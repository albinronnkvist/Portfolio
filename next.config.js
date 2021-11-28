const nextTranslate = require('next-translate')

module.exports = {
  ...nextTranslate(),
  experimental: {
    scrollRestoration: true,
  }
};