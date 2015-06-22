'use strict';

// Required Library
var Promise = require('bluebird');
var model = require('../../models');

exports.clearAll = function(){
  console.log('Clear Database');

  return Promise.all([
    model.Post.remove(),
    model.User.remove()
  ]);
};

exports.createUser = function(user){
  console.log('Create User', user);

  return new model.User(user)
    .save();
};

exports.createPost = function(post){
  console.log('Create Post', post);

  return new model.Post(post)
    .save();
};
