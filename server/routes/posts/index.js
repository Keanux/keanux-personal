'use strict';

// Express Related Library
var express = require('express');

// Route
var router = express.Router();

// Models
var Models = require('../../models');

// To get all posts
router.get('/', function(req, res) {
  Models.Post.find({})
    .populate('user')
    .exec()
    .then(function(posts) {
      res.json(posts);
    });
});

module.exports = router;
