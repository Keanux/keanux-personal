'use strict';

// Assert Library
var chai = require('chai');
var expect = chai.expect;

// Webdriver Library
var webdriverio = require('webdriverio');
var options = {
  desiredCapabilities: {
    browserName: 'phantomjs'
  }
};
var client = webdriverio.remote(options);

// Test
describe('HomePage', function() {
  before(function() {
    client
      .init()
      .url('http://localhost:8080/');
  });

  it('Title should be "Keanux-Personal Demo"', function(done) {
    client.getTitle(function(err, title) {
      expect(title).to.equal('Keanux-Personal Demo');

      done();
    });
  });

  after(function() {
    client
      .end();
  });
});
