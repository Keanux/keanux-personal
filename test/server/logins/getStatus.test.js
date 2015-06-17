'use strict';

var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var getStatus = require('../../../server/routes/logins/getStatus');

describe('Login', function() {
  describe('Get Status', function() {
    it('Get user status should authenticate by req.isAuthenticated', function() {
      // Arrange
      var req = {};
      var res = {};
      req.isAuthenticated = sinon.spy();
      req.user = 'test';
      res.json = sinon.spy();

      // Act
      getStatus(req, res);

      // Assert
      expect(req.isAuthenticated.calledOnce).to.equals(true);
      expect(res.json.calledOnce).to.equals(true);
    });

  });
});
