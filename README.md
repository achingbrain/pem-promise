# pem-promise

[![Dependency status][david-image]][david-url] [![Build status][travis-image]][travis-url] [![Coverage status][coveralls-image]][coveralls-url]

Wraps [pem](https://libraries.io/npm/pem) in a promise compatible API.

## Installation

```
$ npm install --save pem-promise
```

## Usage

```javascript
const pem = require('pem-promise')
const https = require('https')

pem.createCertificate({
  days: 1,
  selfSigned: true
})
  .then((keys) => {
    https.createServer({key: keys.serviceKey, cert: keys.certificate}, function(req, res) {
      res.end('o hai!')
    }).listen(443)
  })
  .catch((error) => {
    console.error(`Could not create certificate because ${error}`)
  })
```

All pem methods are wrapped.  See the [pem documentation][] for full details of the API.

[david-image]: https://david-dm.org/achingbrain/pem-promise.svg?theme=shields.io
[david-url]: https://david-dm.org/achingbrain/pem-promise
[travis-image]: https://img.shields.io/travis/achingbrain/pem-promise/master.svg
[travis-url]: https://travis-ci.org/achingbrain/pem-promise
[coveralls-image]: http://img.shields.io/coveralls/achingbrain/pem-promise/master.svg
[coveralls-url]: https://coveralls.io/r/achingbrain/pem-promise
[pem documentation]: https://github.com/andris9/pem/blob/master/README.md
