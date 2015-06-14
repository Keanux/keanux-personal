'use strict';

// Required Library
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// Flux
var Dispatcher = require('../dispatchers/appDispatcher');

// Data
var postlist = [];

// Store
var postlistStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function (callback) {
    this.on('change', callback);
  },
  removeChangeListener: function (callback) {
    this.off('change', callback);
  },
  getPosts: function () {
    return postlist;
  }
});

// Watch
postlistStore.dispatchToken = Dispatcher.register(function (payload) {
  var actions = {
    getAllPosts: function (payload) {
      fetch('/api/posts')
        .then(function (response) {
          return response.json();
        }).then(function(data) {
          postlist = data;

          postlistStore.emit('change');
        }).catch(function(ex) {
          console.log('json parsing failed', ex);
        });
    }
  };

  if(actions[payload.action.type]){
    actions[payload.action.type](payload);
  }
});

module.exports = postlistStore;


