// Required Library
var React = require('react');
var $ = require('jquery');

// Related Control
var PostList = require('./postlist');

// Control
var PostBox = React.createClass({
    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState(data);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: []};
    },
    render: function() {
        return (
            <div className="postBox">
                <h1>Keanux</h1>
                <PostList data={this.state.data} />
            </div>
        );
    }
});

module.exports = PostBox;