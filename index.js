const pem = require('pem')
const promisify = require('es6-promisify')

module.exports = {}

Object.keys(pem).forEach(key => {
  module.exports[key] = promisify(pem[key])
})
