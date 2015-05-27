// Express Related Library
var express = require('express');
var bodyParser = require('body-parser');
var browserify = require('connect-browserify');

// React Related Library
var reactify = require('reactify');
var React = require('react');
var nodeJsx = require('node-jsx');

nodeJsx.install({extension: '.jsx'});

// App middleware setting
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

// Register Route and Bundle.js
var apiController = require('./controllers/api');
app.use('/api', apiController)
   .use('/bundle.js', browserify.serve({
       entry: __dirname + '/app/main',
       debug: true,
       watch: true,
       transforms: [reactify]
   }));

// Start application
var port = process.env.PORT || 8080;
app.listen(port);

console.log('Magic happens on port ' + port);
