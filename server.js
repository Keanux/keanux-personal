// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mysql      = require('mysql');
var browserify = require('connect-browserify');
var reactify   = require('reactify');
var React      = require('react');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '8889',
  user     : 'USER',
  password : 'PASSWORD',
  database : 'keany'
});

require('node-jsx').install({extension: '.jsx'})

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.get('/users', function(req, res) {
  connection.query('SELECT * FROM keany_user', function(err, rows, fields) {
    if (err) throw err;

    res.json(rows);
  });
});

router.get('/posts', function(req, res) {
  var sql = 'SELECT kp.*, kup.nickname, ku.username FROM keany_post as kp ';
  sql += 'LEFT JOIN keany_user_profile as kup ON (kup.id = kp.user_id) ';
  sql += 'LEFT JOIN keany_user as ku ON (ku.id = kp.user_id) ';
  sql += 'ORDER BY RAND() LIMIT 25';
  connection.query(sql, function(err, rows, fields) {
    if (err) throw err;

    res.json({ data: rows });
  });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app
    .use('/api', router)
    .use('/bundle.js', browserify.serve({
      entry: __dirname + '/public/scripts/posts',
      debug: true, watch: true,
      transforms: [reactify]
    }));
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
