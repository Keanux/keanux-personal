var PostBox = require('./components/post/PostBox');

React.render(
    <PostBox url="/api/posts" />,
    document.getElementById('content')
);