const test = require('ava')
const pem = require('../')

test('should create a certificate', t => {
  return pem.createCertificate({
    days: 1,
    selfSigned: true
  })
  .then(keys => {
    t.truthy(keys.serviceKey)
    t.truthy(keys.certificate)
  })
})
