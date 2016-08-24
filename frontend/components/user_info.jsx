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
    this.currentUserListener = SessionStore.addListener(this._updateFollow);
  },

  componentWillUnmount() {
    this.userListener.remove();
    this.currentUserListener.remove();
  },

  componentWillReceiveProps() {
    if (this.props.user) {
      ApiUtil.fetchUserTotals(this.props.user);
    }
  },

  _updateTotals() {
    this.setState({
      pageUserInfo: UserStore.totals()
    });
  },

  _updateFollow() {
    this.setState({
      currentUserFollowings: SessionStore.followings()
    });
  },

  _handleFollow() {
    ApiUtil.followUser(this.state.pageUserInfo.user.id);
  },

  _handleUnFollow() {
    ApiUtil.unfollowUser(this.state.pageUserInfo.user.id);
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

      followings.forEach(function (follow) {
        if (follow.id === this.state.pageUserInfo.user.id) {
          followed = true;
        }
      }.bind(this));

      let button;
      if (this.state.pageUserInfo.user.id === this.state.currentUserId) {
        button = "";
      } else if (followed){
        button = <button id="follow-button" onClick={this._handleUnFollow}>Unfollow</button>;
      } else {
        button = <button id="follow-button" onClick={this._handleFollow}>Follow</button>;
      }

      return (
        <div className="user-info-container">
          <h2>{PageUserInfo.user.username}</h2>
          {button}
          <h4>Lifetime Stats</h4>

          <div id="lifetime-stats">
            <p>{UserTotals.rideCount} rides</p>
            <p>{UserTotals.totalDistance} miles</p>
            <p>{UserTotals.totalCalories} calories burned</p>
            <p>{hours} hours {minutes} minutes {seconds} seconds</p>
          </div>
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
