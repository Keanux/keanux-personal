'use strict';

exports.config = {
  specs: ['test/e2e/**/*.js'],
  capabilities: {
    browserName: 'chrome'
  },
  baseUrl: 'http://localhost:8080',
  framework: 'mocha',
  mochaOpts: {
    timeout: 30000 // ms
  },
  onPrepare: function(){
    browser.ignoreSynchronization = true;
  }
};
