'use strict';

var path = require('path');

// Express Related Library
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var browserify = require('connect-browserify');

// Passport Library
var passport = require('passport');

// React Related Library
var reactify = require('reactify');
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
app.use(express.static(path.join(__dirname, '../client/public')));

// Register Route and Bundle.js
var apiRoute = require('./routes/api');
app.use('/api', apiRoute)
  .use('/bundle.js', browserify.serve({
    entry: path.join(__dirname, '../client/app/main'),
    debug: true,
    watch: true,
    transforms: [reactify]
  }));

// Start application
var port = process.env.PORT || 8080;
app.listen(port);

console.log('Magic happens on port ' + port);
