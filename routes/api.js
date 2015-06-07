// Express Related Library
var express = require('express');

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

module.exports = router;