const React = require('react'),
      hashHistory = require('react-router').hashHistory,
      Link = require('react-router').Link;

const SessionStore = require('../stores/session_store'),
      SessionActions = require('../actions/session_actions'),
      AllUsersPane = require('./all_users');

const Button = require('react-bootstrap').Button;
const Glyphicon = require('react-bootstrap').Glyphicon;


const NavBar = React.createClass({

  getInitialState(){
    return {
      menuClicked: false
    };
  },

  _goHome(){
    hashHistory.push("/");
  },

  _goProfile(){
    hashHistory.push("user/" + SessionStore.currentUser().id);
  },

  _createRide(){
    hashHistory.push("create_ride");
  },

  _handleLogOut(){
    SessionActions.logOut();
  },

  _toggleMenu(){
    if (this.state.menuClicked === false) {
      this.setState({ menuClicked: true });
    } else {
      this.setState({ menuClicked: false });
    }
  },

  render(){
    return(
      <header id="header" className="alt">
        <nav>
        </nav>
        <nav id="create_ride">
          <a id="create-ride-button" onClick={this._createRide}>Create a Ride</a>
        </nav>
				<nav id="nav">
					<ul>
						<li className="special">
							<span className="menuToggle" onClick={this._goProfile}>{SessionStore.currentUser().username}</span>
                <i id="menu" className={this.state.menuClicked ? "is-menu-show fa fa-bars" : "is-menu-hide fa fa-bars"} aria-hidden="true" onClick={this._toggleMenu}>
                  <ul id={this.state.menuClicked ? "menu-show" : "menu-hide"}>

                    <li><a onClick={this._goHome}>Feed</a></li>
                    <li><a onClick={this._createRide}>Create Ride</a></li>
                    <AllUsersPane />
                    <li><a onClick={this._handleLogOut}>Log Out</a></li>
                  </ul>
                </i>

						</li>
					</ul>
				</nav>
			</header>
    );
  }
});

// <nav>
//   <div id="nav-title" onClick={this._goHome}>
//   </div>
// </nav>
// <div id="navbar-buttons">
//   <a onClick={this._createRide}>Create a Ride</a>
//   <a onClick={this._goHome}>Feed</a>
//   <a onClick={this._goProfile} id="nav-profile">{SessionStore.currentUser().username}</a>
// </div>
// <div id="dropdown">
//   <button id="dropbtn">
//     <div id='menu'>
//       <img src="http://res.cloudinary.com/ddyl8ojhn/image/upload/v1467853219/whitearrowdown1_abyhs8.png" />
//     </div>
//   </button>
//   <div id="dropdown-content">
//     <a onClick={this._goProfile}>PROFILE</a>
//     <a onClick={this._handleLogOut}>LOGOUT</a>
//   </div>
// </div>




module.exports = NavBar;
