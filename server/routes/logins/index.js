'use strict';

// Express Related Library
var express = require('express');
var router = express.Router();

// Passport Library
var passport = require('passport');

// Serialization
var serialization = require('../../helpers/logins/passportSerialization');
serialization(passport);

// Strategy
var strategy = require('../../helpers/logins/passportStrategy');
passport.use(strategy);

// GET /logins/facebook
router.get('/facebook',
  passport.authenticate('facebook'),
  function(req, res) {
    // The request will be redirected to Facebook for authentication, so this
    // function will not be called.
  });

// GET /logins/facebook/callback
router.get('/facebook/callback',
  passport.authenticate('facebook', {failureRedirect: '/logins'}),
  function(req, res) {
    res.redirect('/');
  });

// GET /logins/getStatus
router.get('/getStatus', require('./getStatus'));

module.exports = router;
