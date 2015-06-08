// Required Library
var React = require('react');
var $ = require('jquery');

// Related Control
var PostList = require('./postlist');

// Flux
var PostListActions = require('../../actions/postlistAction');
var PostListStore = require('../../stores/postlistStore');

// Control
var PostBox = React.createClass({
    getInitialState: function () {
        return {
            postlist: PostListStore.getPosts()
        };
    },
    componentWillMount: function () {
        PostListStore.addChangeListener(this.onStoreChange);

        PostListActions.getAllPosts();
    },
    componentWillUnmount: function () {
        PostListStore.removeChangeListener(this.onStoreChange);
    },
    onStoreChange: function () {
        this.setState({
            postlist: PostListStore.getPosts()
        });
    },
    render: function () {
        return (
            <div className="postBox">
                <h1>Keanux-Personal Demo</h1>
                <PostList data={ this.state.postlist }/>
            </div>
        );
    }
});

module.exports = PostBox;
