'use strict';

var config = require('../../config/config.json');
var Models = require('../../models');
var FacebookStrategy = require('passport-facebook').Strategy;

var strategy = new FacebookStrategy({
    clientID: config.development.facebook.appId,
    clientSecret: config.development.facebook.appSecret,
    callbackURL: 'http://localhost:8080/api/logins/facebook/callback',
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

);

module.exports = strategy;
