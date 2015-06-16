'use strict';

var React = require('react/addons');
var classnames = require('classnames');

var Nav = React.createClass({
  getInitialState: function () {
    return {
      hideMenu: true,
      isLogin: false,
      user: null
    };
  },
  componentDidMount: function () {
    var self = this;
    fetch('/api/logins/getStatus')
      .then(function (response) {
        return response.json();
      }).then(function(result) {
        self.setState({
          isLogin: result.isLogin,
          user: result.user
        });
      }).catch(function(err) {
        console.log('json parsing failed', err);
      });
  },
  handleToggleMenu: function () {
    this.setState({
      hideMenu: !this.state.hideMenu
    });
  },
  render: function () {
    var logoClass = classnames('nav-logo', {
      'hide': !this.state.hideMenu
    });
    var menuClass = classnames('nav-menu', {
      'hide': this.state.hideMenu
    });

    return (
      <nav className="nav">
        <div className={ logoClass }
             onClick={ this.handleToggleMenu }>
          <h1>K</h1>
        </div>
        <div className={ menuClass }
             onMouseLeave={ this.handleToggleMenu }>
          <ul className="nav-menu-list">
            <li className="nav-menu-item">
              <a title="回首頁" href="/">
                <i className="icon icons-keanux">K</i>
                  <span className="nav-menu-title">
                    首頁
                  </span>
              </a>
            </li>
            {this.state.isLogin ?
              <li className="nav-menu-item">
                <a title="到個人頁面" href="#">
                  <i className="icon icons-avatar">
                    <img src={ this.state.user.photo }/>
                  </i>
                    <span className="nav-menu-title">
                      { this.state.user.nickname }
                    </span>
                </a>
              </li> :
              <li className="nav-menu-item">
                <a title="Login" href="api/logins/facebook">
                    <span className="nav-menu-title">
                      Facebook Login
                    </span>
                </a>
              </li>
            }
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Nav;
