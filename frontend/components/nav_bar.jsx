const React = require('react'),
      hashHistory = require('react-router').hashHistory,
      Link = require('react-router').Link;

const SessionStore = require('../stores/session_store'),
      SessionActions = require('../actions/session_actions');


const NavBar = React.createClass({

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

  render(){
    return(
        <div>
          <nav id='navbar'>

            <div className="nav-title" onClick={this._goHome}>
              Cycl
            </div>

            <div id='right'>
              <div className="navbar-buttons">
                <a onClick={this._createRide}>Create a Ride</a>
                <a onClick={this._goHome}>Feed</a>
                <a onClick={this._goProfile}>{SessionStore.currentUser().username}</a>
              </div>
              <div className="dropdown">
                <button className="dropbtn">
                  <div id='menu'>
                    <img src="http://res.cloudinary.com/ddyl8ojhn/image/upload/v1467853219/whitearrowdown1_abyhs8.png" />
                  </div>
                </button>
                <div className="dropdown-content">
                  <a onClick={this._goProfile}>PROFILE</a>
                  <a href="#">SETTINGS</a>
                  <a onClick={this._handleLogOut}>LOGOUT</a>
                </div>
              </div>
            </div>

          </nav>
        </div>
    );
  }
});

module.exports = NavBar;
