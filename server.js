// Express Related Library
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var browserify = require('connect-browserify');

// Passport Library
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var Models = require('./models');

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
        callbackURL: "http://localhost:8080/auth/facebook/callback"
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
                        loginId: profile.id
                    }
                })
                .spread(function (user, created) {
                    console.log(user, created);

                    return done(null, user);
                });
        });
    }
));

// React Related Library
var reactify = require('reactify');
var React = require('react');
var nodeJsx = require('node-jsx');

nodeJsx.install({extension: '.jsx'});

// App middleware setting
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret: 'keyboard cat'}));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));

// Register Route and Bundle.js
var apiRoute = require('./routes/api');
app.use('/api', apiRoute)
    .use('/bundle.js', browserify.serve({
        entry: __dirname + '/app/main',
        debug: true,
        watch: true,
        transforms: [reactify]
    }));

// GET /auth/facebook
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Facebook authentication will involve
//   redirecting the user to facebook.com.  After authorization, Facebook will
//   redirect the user back to this application at /auth/facebook/callback
app.get('/auth/facebook',
    passport.authenticate('facebook'),
    function (req, res) {
        // The request will be redirected to Facebook for authentication, so this
        // function will not be called.
    });

// GET /auth/facebook/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {failureRedirect: '/login'}),
    function (req, res) {
        res.redirect('/');
    });

// Start application
var port = process.env.PORT || 8080;
app.listen(port);

console.log('Magic happens on port ' + port);
