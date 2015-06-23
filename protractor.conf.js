'use strict';

exports.config = {
  capabilities: {
    browserName: 'firefox'
  },
  framework: 'mocha',
  mochaOpts: {
    timeout: 30000 // ms
  },
  onPrepare: function(){
    browser.ignoreSynchronization = true;
  }
};
