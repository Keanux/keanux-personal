'use strict';

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  nickname: String,
  provider: String,
  loginId: String,
  photo:String
});

module.exports = mongoose.model('User', userSchema);
