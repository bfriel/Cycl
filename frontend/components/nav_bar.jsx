const React = require('react'),
      hashHistory = require('react-router').hashHistory,
      Link = require('react-router').Link;

const SessionStore = require('../stores/session_store'),
      SessionActions = require('../actions/session_actions'),
      AllUsersPane = require('./all_users');

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
    if (this.props.loc === "") {
      leftNav = <h3>Welcome to <span id="title">Cycl</span></h3>;
    } else {
      leftNav = <h3><a onClick={this._goHome}><span id="title">Cycl</span></a></h3>;
    }
    return leftNav;
  },

  populateCenterNav(){
    let centerNav;
    if (this.props.loc === "create_ride"){
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
				<nav id="nav">
					<ul>
						<li>
							<span className="user-name underline-l-r" onClick={this._goProfile}>{SessionStore.currentUser().username}</span>
              <i id="menu" className={this.state.menuClicked ? "is-menu-show fa fa-bars" : "is-menu-hide fa fa-bars"} aria-hidden="true" onClick={this._toggleMenu}>
                <ul id="menu-show">
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

module.exports = NavBar;
