const React = require('react'),
      hashHistory = require('react-router').hashHistory,
      Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');


const NavBar = React.createClass({

  _goHome(){
    hashHistory.push("/");
  },

  _handleLogOut(){
    SessionActions.logOut();
  },

  render(){
    return(
        <div>
          <nav id='navbar'>

            <div className="nav-title" onClick={this._goHome}>
              CYCL
            </div>

            <div id='right'>
              <div className="navbar-buttons">
                <a href="#">Feed</a>
                <a href="#" id="last">Create a Route</a>
                <a href="#">{SessionStore.currentUser().username}</a>
              </div>
              <div className="dropdown">
                <button className="dropbtn">
                  <div id='menu'>
                    <img src="http://res.cloudinary.com/ddyl8ojhn/image/upload/v1467267735/down-arrow_wwwzde.png" />
                  </div>
                </button>
                <div className="dropdown-content">
                  <a href="#">PROFILE</a>
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
