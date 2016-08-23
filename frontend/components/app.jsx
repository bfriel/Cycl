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
    let navbar = '';
    if (SessionStore.isUserLoggedIn()) {
      navbar = <NavBar loc={this.props.location.pathname.slice(0)} />;
    }
    return (
      <div className="app-container">
        {navbar}
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
