// See documentation on https://github.com/cozy/americano#routes

var index = require('./index');

module.exports = {
  '': {
    get: index.main
  }
};

