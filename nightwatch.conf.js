// https://nightwatchjs.org/gettingstarted#nightwatch-json
require('events').EventEmitter.defaultMaxListeners = 100;
module.exports = (function(settings) {
  settings.test_workers = false;
  return settings;
})(require('./nightwatch.json'));