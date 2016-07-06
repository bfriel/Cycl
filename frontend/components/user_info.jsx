const React = require('react'),
      AllUsersStore = require('../stores/all_users'),
      UserStore = require('../stores/user.js'),
      ApiUtil = require('../util/api_util'),
      SessionStore = require("../stores/session_store");


const UserInfo = React.createClass({

  getInitialState(){
    return {
      currentUserId: SessionStore.currentUser().id,
      pageUserInfo: UserStore.totals(),
      currentUserFollowings: SessionStore.followings()
    };
  },

  componentDidMount() {
      this.userListener = UserStore.addListener(this._updateTotals);
  },

  componentWillUnmount() {
    this.userListener.remove();
  },

  componentWillReceiveProps() {
    if (this.props.user) {
      ApiUtil.fetchUserTotals(this.props.user);
    }
  },

  _updateTotals: function () {
    this.setState({
      pageUserInfo: UserStore.totals()
    });
  },

  render(){
    if (Object.keys(this.state.pageUserInfo).length > 0) {
      const PageUserInfo = this.state.pageUserInfo;
      const UserTotals = PageUserInfo.totals;

      let hours = (UserTotals.totalDuration / 3600).toFixed(0);
      let minutes = (UserTotals.totalDuration % 3600 / 60).toFixed(0);
      let seconds = UserTotals.totalDuration % 60;

      let followings = this.state.currentUserFollowings;
      let followed = false;

      // followings.forEach(function (follow) {
      //   if (follow.id === this.state.pageUserInfo.user.id) {
      //     followed = true;
      //   }
      // }.bind(this));

      let button;
      if (this.state.pageUserInfo.user.id === this.state.currentUserId) {
        button = "";
      } else if (followed){
        button = <button onClick={this.handleUnFollow}>Unfollow</button>;
      } else {
        button = <button onClick={this.handleFollow}>Follow</button>;
      }

      return (
        <div className="user-info container">
          <h2>{PageUserInfo.user.username}</h2>
          {button}
          <h4>Lifetime Stats</h4>

          <table className="table">
            <tbody>
              <tr>
                <td>{UserTotals.rideCount} rides</td>
              </tr>
              <tr>
                <td>{UserTotals.totalDistance} miles</td>
              </tr>
              <tr>
                <td>{UserTotals.totalCalories} calories burned</td>
              </tr>
              <tr>
                <td>{hours} hours {minutes} minutes {seconds} seconds </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div className="user-info">
          <p>Please log in to see your profile</p>
        </div>
      );
    }
  }
});

module.exports = UserInfo;
