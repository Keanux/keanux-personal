// Required Library
var React = require('react');

// Related Control
var PostBox = require('./components/post/PostBox');
var Nav = require('./components/nav/nav');

React.render(
    <div>
        <Nav />
        <PostBox url="/api/posts" />
    </div>
    , document.getElementById('content')
);
