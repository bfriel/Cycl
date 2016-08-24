const React = require('react'),
      Link = require('react-router').Link;
//Components
const NavBar = require('./nav_bar'),
      SessionStore = require('../stores/session_store'),
      SessionActions = require('../actions/session_actions');

const App = React.createClass({

  componentDidMount() {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  _handleLogOut(){
    SessionActions.logOut();
  },

  render() {
    let navBar;
    if (SessionStore.isUserLoggedIn()) {
      navBar = <NavBar loc={this.props.location.pathname.slice(1)} />;
    }
    return (
      <div className="app-container">
        {navBar}
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
