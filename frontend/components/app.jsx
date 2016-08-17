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


  // greeting() {
  //   if (SessionStore.isUserLoggedIn()) {
  //   	return (
  //   		<hgroup className="header-group">
  //   			<h2 className="header-name">Hi, {SessionStore.currentUser().username}!</h2>
  //   			<input className="header-button" type="submit" value="logout" onClick={ this._handleLogOut } />
  //   		</hgroup>
  //   	);
  //   } else if ( !["/login", "/signup"].includes(this.props.location.pathname) ) {
  //     return (
  //       <nav className="login-signup">
  //         <Link to="/login" activeClassName="current">Login</Link>
  //         &nbsp;or&nbsp;
  //         <Link to="/signup" activeClassName="current">Sign up!</Link>
  //       </nav>
  //     );
  //   }
  // },

  render() {
    let navbar = '';
    if (SessionStore.isUserLoggedIn()) {
      navbar = <NavBar />;
    }
    return (
      <div className="app-container">
        <nav>
          {navbar}
        </nav>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
