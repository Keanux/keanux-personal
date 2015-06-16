'use strict';

// Express Related Library
var express = require('express');
var router = express.Router();

// Models
var Models = require('../../models');

// Config
var config = require('../../config/config.json');

// Passport Library
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Facebook profile is serialized
//   and deserialized.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Use the FacebookStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Facebook
//   profile), and invoke a callback with a user object.
passport.use(new FacebookStrategy({
    clientID: config.development.facebook.appId,
    clientSecret: config.development.facebook.appSecret,
    callbackURL: 'http://localhost:8080/api/login/facebook/callback',
    profileFields: ['id', 'name', 'displayName', 'photos']
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function() {
      Models.User
        .findOne({ provider: 'Facebook', loginId: profile.id })
        .exec()
        .then(function(user) {
          if (user) {
            return done(null, user);
          }

          new Models.User({
            name: profile.name.familyName + profile.name.givenName,
            nickname: profile.displayName,
            provider: 'Facebook',
            loginId: profile.id,
            photo: profile.photos[0].value
          }).save()
            .then(function(user) {
              return done(null, user);
            });
        });
    });
  }

));

// GET /login/facebook
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Facebook authentication will involve
//   redirecting the user to facebook.com.  After authorization, Facebook will
//   redirect the user back to this application at /login/facebook/callback
router.get('/facebook',
  passport.authenticate('facebook'),
  function(req, res) {
    // The request will be redirected to Facebook for authentication, so this
    // function will not be called.
  });

// GET /login/facebook/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get('/facebook/callback',
  passport.authenticate('facebook', {failureRedirect: '/login'}),
  function(req, res) {
    res.redirect('/');
  });

// GET /login/getStatus
router.get('/getStatus', require('./getStatus'));

module.exports = router;
