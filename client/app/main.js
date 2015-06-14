'use strict';

// Required Library
var React = require('react');

// Related Control
var PostBox = require('./components/post/postbox');
var Nav = require('./components/nav/nav');

// fetch polyfill
if (typeof self !== 'undefined') {
  require('whatwg-fetch');
}

React.render(
  <div>
    <Nav />
    <PostBox />
  </div>, document.getElementById('content')
);
