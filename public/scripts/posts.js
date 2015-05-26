var converter = new Showdown.converter();
var Ago = require('react-ago-component');

function strip(html) {
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

var Post = React.createClass({displayName: "Post",
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    var icon = "https://graph.facebook.com/" + this.props.username + "/picture?width=120&height=120";
    return (
      React.createElement("div", {className: "post"}, 
        React.createElement(PostMeta, {username: this.props.username, nickname: this.props.nickname, create_time: this.props.create_time}), 
        React.createElement("h2", {className: "postTitle"}, 
          React.createElement("a", {href: "http://keanux.com/p/" + this.props.unique_id}, this.props.title)
        ), 
        React.createElement("h3", {className: "postSubTitle"}, 
          this.props.subtitle
        ), 
        React.createElement("div", {className: "postContent"}, 
          strip(rawMarkup)
        )
      )
    );
    // <div className="postContent" dangerouslySetInnerHTML={{__html: rawMarkup}} />
  }
});

var PostMeta = React.createClass({displayName: "PostMeta",
  render: function() {
    var then = new Date(this.props.create_time * 1000);
    return (
      React.createElement("div", {className: "block-postMeta postMeta-previewHeader"}, 
        React.createElement("div", {className: "u-floatLeft"}, 
          React.createElement("div", {className: "postMetaInline-avatar"}, 
            React.createElement("a", {href: "http://keanux.com/@" + this.props.username}, 
              React.createElement("img", {src: 'https://graph.facebook.com/' + this.props.username + '/picture?width=120&height=120', className: "avatar-image avatar-image--smaller"})
            )
          ), 
          React.createElement("div", {className: "postMetaInline-feedSummary"}, 
            React.createElement("a", {href: "http://keanux.com/@" + this.props.username}, this.props.nickname), 
            React.createElement("span", {className: "postMetaInline postMetaInline--supplemental"}, 
              React.createElement(Ago, {date: then, autoUpdate: true, tooltipFormat: "long"})
            )
          )
        )
       )
    );
  }
});

var PostBox = React.createClass({displayName: "PostBox",
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
      React.createElement("div", {className: "postBox"}, 
        React.createElement("h1", null, "Keanux"), 
        React.createElement(PostList, {data: this.state.data})
      )
    );
  }
});

var PostList = React.createClass({displayName: "PostList",
  render: function() {
    var postNodes = this.props.data.map(function(post, index) {
      return (
        // `key` is a React-specific concept and is not mandatory for the
        // purpose of this tutorial. if you're curious, see more here:
        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
        React.createElement(Post, {unique_id: post.unique_id, nickname: post.nickname, title: post.title, subtitle: post.subtitle, username: post.username, create_time: post.create_time, key: index}, 
          post.content
        )
      );
    });
    return (
      React.createElement("div", {className: "postList"}, 
        postNodes
      )
    );
  }
});

React.render(
  React.createElement(PostBox, {url: "/api/posts"}),
  document.getElementById('content')
);
