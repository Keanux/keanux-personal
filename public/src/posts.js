var converter = new Showdown.converter();
var Ago = require('react-ago-component');

function strip(html) {
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

var Post = React.createClass({
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    var icon = "https://graph.facebook.com/" + this.props.username + "/picture?width=120&height=120";
    return (
      <div className="post">
        <PostMeta username={this.props.username} nickname={this.props.nickname} create_time={this.props.create_time} />
        <h2 className="postTitle">
          <a href={"http://keanux.com/p/" + this.props.unique_id}>{this.props.title}</a>
        </h2>
        <h3 className="postSubTitle">
          {this.props.subtitle}
        </h3>
        <div className="postContent">
          {strip(rawMarkup)}
        </div>
      </div>
    );
    // <div className="postContent" dangerouslySetInnerHTML={{__html: rawMarkup}} />
  }
});

var PostMeta = React.createClass({
  render: function() {
    var then = new Date(this.props.create_time * 1000);
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

var PostList = React.createClass({
  render: function() {
    var postNodes = this.props.data.map(function(post, index) {
      return (
        // `key` is a React-specific concept and is not mandatory for the
        // purpose of this tutorial. if you're curious, see more here:
        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
        <Post unique_id={post.unique_id} nickname={post.nickname} title={post.title} subtitle={post.subtitle} username={post.username} create_time={post.create_time} key={index}>
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

React.render(
  <PostBox url="/api/posts" />,
  document.getElementById('content')
);
