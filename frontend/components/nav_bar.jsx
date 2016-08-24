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

  populateLeftNav(){
    let leftNav;
    if (this.props.loc === "/") {
      leftNav = <h3>Welcome to <span id="title">Cycl</span></h3>;
    } else {
      leftNav = <h3><a onClick={this._goHome}><span id="title">Cycl</span></a></h3>;
    }
    return leftNav;
  },

  populateCenterNav(){
    let centerNav;
    if (this.props.loc === "/create_ride"){
      centerNav = "";
    } else {
      centerNav = <a id="create-ride-link" onClick={this._createRide}>Create a Ride</a>;
    }
    return centerNav;
  },


  render(){
    let leftNav = this.populateLeftNav();
    let centerNav = this.populateCenterNav();
    return(
      <header id="header">
          {leftNav}
        {centerNav}
				<nav id="nav">
					<ul>
						<li className="special">
							<span className="menuToggle" onClick={this._goProfile}>{SessionStore.currentUser().username}</span>
              <i id="menu" className={this.state.menuClicked ? "is-menu-show fa fa-bars" : "is-menu-hide fa fa-bars"} aria-hidden="true" onClick={this._toggleMenu}>
                <ul id={this.state.menuClicked ? "menu-show" : "menu-hide"}>
                  <i id="menu-close" className="fa fa-times" aria-hidden="true"></i>
                  <li className="hvr-sweep-to-right" onClick={this._goHome}>Feed</li>
                  <li className="hvr-sweep-to-right" onClick={this._createRide}>Create Ride</li>
                  <AllUsersPane />
                  <li className="hvr-sweep-to-right" onClick={this._handleLogOut}>Log Out</li>
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
