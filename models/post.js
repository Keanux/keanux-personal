'use strict';

var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var postSchema = new Schema({
  title: String,
  subtitle: String,
  content: String,
  createdAt:{ type: Date, default: Date.now },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Post', postSchema);
