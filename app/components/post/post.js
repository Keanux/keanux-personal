var Converter = new Showdown.converter();
var Strip = require('../../utilities/strip');

var PostMeta = require('./postmeta');

var Post = React.createClass({
    render: function() {
        var rawMarkup = Converter.makeHtml(this.props.children.toString());
        var icon = "https://graph.facebook.com/" + this.props.username + "/picture?width=120&height=120";
        return (
            <div className="post">
                <PostMeta username={this.props.username} nickname={this.props.nickname} createdAt={this.props.createdAt} />
                <h2 className="postTitle">
                    <a href={"http://keanux.com/p/" + this.props.unique_id}>{this.props.title}</a>
                </h2>
                <h3 className="postSubTitle">
                    { this.props.subtitle }
                </h3>
                <div className="postContent">
                    { Strip(rawMarkup) }
                </div>
            </div>
        );
        // <div className="postContent" dangerouslySetInnerHTML={{__html: rawMarkup}} />
    }
});

module.exports = Post;