'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/keanux');

exports.User = require('../models2/user');
exports.Post = require('../models2/post');
