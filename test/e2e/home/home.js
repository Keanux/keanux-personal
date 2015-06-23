'use strict';

var chai = require('chai');
var expect = chai.expect;

describe('HomePage', function () {
  beforeEach(function (done) {
    browser.get('/');

    // Hack for wait react initial
    browser.sleep(1 * 1000).then(done);
  });

  it('Title should be "Keanux-Personal Demo"', function (done) {
    browser.getTitle()
      .then(function (title) {
        expect(title).to.equal('Keanux-Personal Demo');

        done();
      });
  });

  it('Article\'s count should be 3', function (done) {
    element.all(by.css('.post'))
      .count()
      .then(function (count) {
        expect(count).to.equal(3);

        done();
      });
  });
});
