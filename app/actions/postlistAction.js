'use strict';

// Flux
var Dispatcher = require('../dispatchers/appDispatcher');

// Actions
var postlistActions = {
  getAllPosts: function () {
    Dispatcher.handleViewAction({
      type: 'getAllPosts'
    });
  }
};

module.exports = postlistActions;
