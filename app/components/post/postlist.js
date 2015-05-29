// Required Library
var React = require('React');

// Related Control
var Post = require('./post');

// Control
var PostList = React.createClass({
    render: function () {
        var postNodes = this.props.data.map(function (post, index) {
            return (
                <Post unique_id={post.id}
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
