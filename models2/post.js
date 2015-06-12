'use strict';

var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var postSchema = new Schema({
  title: String,
  subtitle: String,
  content: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Post', postSchema);
