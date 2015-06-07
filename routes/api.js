// Express Related Library
var express = require('express');

// Passport Library
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

var FACEBOOK_APP_ID = "FACEBOOK_APP_ID";
var FACEBOOK_APP_SECRET = "FACEBOOK_APP_SECRET";

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Facebook profile is serialized
//   and deserialized.
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

// Use the FacebookStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Facebook
//   profile), and invoke a callback with a user object.
passport.use(new FacebookStrategy({
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:8080/api/login/facebook/callback",
        profileFields: ['id', 'name', 'displayName', 'photos']
    },
    function (accessToken, refreshToken, profile, done) {
        // asynchronous verification, for effect...
        process.nextTick(function () {
            Models.User
                .findOrCreate({
                    where: {
                        provider: 'Facebook',
                        loginId: profile.id
                    },
                    defaults: {
                        name: profile.name.familyName + profile.name.givenName,
                        nickname: profile.displayName,
                        provider: 'Facebook',
                        loginId: profile.id,
                        photo: profile.photos[0].value
                    }
                })
                .spread(function (user, created) {
                    return done(null, user);
                });
        });
    }
));

// Models
var Models = require('../models');

// Route
var router = express.Router();

// To make sure everything is working
router.get('/', function (req, res) {
    res.json({message: 'hooray! welcome to our api!'});
});

// To get all user data
router.get('/users', function (req, res) {
    Models.User.findAll()
        .then(function (users) {
            res.json(users);
        }, function (err) {
            throw err;
        })
});

// To get all posts
router.get('/posts', function (req, res) {
    Models.Post.findAll({include: [{model: Models.User, required: true}]})
        .then(function (posts) {
            res.json({data: posts});
        }, function (err) {
            throw err;
        });
});

// GET /login/facebook
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Facebook authentication will involve
//   redirecting the user to facebook.com.  After authorization, Facebook will
//   redirect the user back to this application at /login/facebook/callback
router.get('/login/facebook',
    passport.authenticate('facebook'),
    function (req, res) {
        // The request will be redirected to Facebook for authentication, so this
        // function will not be called.
    });

// GET /login/facebook/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get('/login/facebook/callback',
    passport.authenticate('facebook', {failureRedirect: '/login'}),
    function (req, res) {
        res.redirect('/');
    });

// GET /login/getStatus
router.get('/login/getStatus', function (req, res) {
    res.json({
        isLogin: req.isAuthenticated(),
        user: req.user
    })
});

module.exports = router;