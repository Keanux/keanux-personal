var Post = require('./post');

var PostList = React.createClass({
    render: function () {
        var postNodes = this.props.data.map(function (post, index) {
            return (
                <Post unique_id={post.id}
                    nickname={ post.User.name }
                    title={post.title}
                    subtitle={post.subtitle}
                    username={ post.User.nickname }
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