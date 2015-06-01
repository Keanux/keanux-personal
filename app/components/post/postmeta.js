// Required Library
var React = require('react');
var Ago = require('react-ago-component');

// Control
var PostMeta = React.createClass({
    render: function() {
        var then = new Date(this.props.createdAt);
        return (
            <div className="block-postMeta postMeta-previewHeader">
                <div className="u-floatLeft">
                    <div className="postMetaInline-avatar">
                        <a href={"http://keanux.com/@" + this.props.username}>
                            <img src={'https://graph.facebook.com/' + this.props.username + '/picture?width=120&height=120'} className="avatar-image avatar-image--smaller" />
                        </a>
                    </div>
                    <div className="postMetaInline-feedSummary">
                        <a href={"http://keanux.com/@" + this.props.username}>{this.props.nickname}</a>
                        <span className="postMetaInline postMetaInline--supplemental">
                            <Ago date={then} autoUpdate={true} tooltipFormat="long" />
                        </span>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = PostMeta;
