const React = require('react');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');


const NavBar = React.createClass({

  _handleLogOut(){
    SessionActions.logOut();
  },

  render(){
    return(
        <div>
          <nav id='navbar'>

            <div id='cycl-title'>
              CYCL
            </div>

            <div id='left'>
              <div id='username'>
                {SessionStore.currentUser().username}
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
