'use strict';

var Models = require('../../models');

function getPosts(req, res) {
  Models.Post.find({})
    .populate('user')
    .exec()
    .then(function(posts) {
      res.json(posts);
    });
}

module.exports = getPosts;
