var React = require('react/addons');
var $ = require('jquery');

var Nav = React.createClass({
        getInitialState: function () {
            return {
                hideMenu: true
            }
        },
        handleToggleMenu: function () {
            this.setState({
                hideMenu: !this.state.hideMenu
            })
        },
        render: function () {
            var cx = React.addons.classSet;
            var logoClass = cx({
                'nav-logo': true,
                'hide': !this.state.hideMenu
            });
            var menuClass = cx({
                'nav-menu' : true,
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
                            <li className="nav-menu-item">
                                <a title="到個人頁面" href="/@10204525184038018">
                                    <i className="icon icons-avatar">
                                        <img src="https://graph.facebook.com/keanyc/picture?width=120&height=120" />
                                    </i>
                                    <span className="nav-menu-title">
                                        Keany
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            );
        }
    })
    ;

module.exports = Nav;