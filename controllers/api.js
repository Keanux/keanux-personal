// Express Related Library
var express = require('express');

// Models
var User = require('../models/user');
var Post = require('../models/post');

var router = express.Router();

// To make sure everything is working
router.get('/', function (req, res) {
    res.json({message: 'hooray! welcome to our api!'});
});

// To get all user data
router.get('/users', function (req, res) {
    User.get(function(err, users){
        if (err) {
            throw err;
        }

        res.json(users);
    });
});

// To get all posts
router.get('/posts', function (req, res) {
    Post.get(function(err, posts){
        if (err) {
            throw err;
        }

        res.json({ data: posts});
    });
});

module.exports = router;