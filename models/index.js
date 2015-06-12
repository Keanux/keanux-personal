'use strict';

var config = require('../config/config.json');
var mongoose = require('mongoose');
mongoose.connect(config.development.dbpath);

exports.User = require('./user');
exports.Post = require('./post');
