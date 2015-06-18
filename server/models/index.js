'use strict';

// Mongoose Setting
var mongoose = require('mongoose');
var config = require('../config/config.json');
mongoose.connect(config.development.dbpath);

if (/mongoose/.test(process.env.DEBUG)) {
  mongoose.set('debug', true);
}

exports.User = require('./user');
exports.Post = require('./post');
