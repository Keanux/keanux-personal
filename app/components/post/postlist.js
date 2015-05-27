var Post = require('./post');

var PostList = React.createClass({
    render: function () {
        var postNodes = this.props.data.map(function (post, index) {
            return (
                <Post unique_id={post.unique_id}
                    nickname={post.nickname}
                    title={post.title}
                    ubtitle={post.subtitle}
                    username={post.username}
                    create_time={post.create_time}
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