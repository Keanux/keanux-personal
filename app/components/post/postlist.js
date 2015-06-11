'use strict';

// Required Library
var React = require('react');

// Related Control
var Post = require('./post');

// Control
var PostList = React.createClass({
    render: function () {
        var postNodes = this.props.data.map(function (post, index) {
            return (
                <Post unique_id={post.unique_id}
                    nickname={ post.User.nickname }
                    title={post.title}
                    subtitle={post.subtitle}
                    username={ post.User.name }
                    createdAt={post.createdAt}
                    key={index}>
                    {post.content}
                </Post>
            );
        });
        return (
            <div className="postList">
                {postNodes}
            </div>
        );
    }
});

module.exports = PostList;
