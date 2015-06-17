'use strict';

// Express Related Library
var express = require('express');

// Route
var router = express.Router();

// To get all posts
router.get('/', require('./getPosts'));

module.exports = router;
