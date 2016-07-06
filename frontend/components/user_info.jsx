const React = require('react'),
      SessionStore = require("../stores/session_store");


const UserInfo = React.createClass({

  getInitialState(){
    return {
      currentUser: SessionStore.currentUser()
    };
  },


  render(){
    let currentUser = this.state.currentUser;

    if (SessionStore.isUserLoggedIn()) {
      return(
        <div className="user-info-container">
          <h2>{currentUser.username}</h2>

        </div>
      );
    } else {
      return(
        <div className="user-info-container">
          <h3>Log In to see your profile</h3>
        </div>
      );
    }
  }
});

module.exports = UserInfo;
