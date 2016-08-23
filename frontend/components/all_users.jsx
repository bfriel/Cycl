const React = require('react'),
      hashHistory = require('react-router').hashHistory,
      AllUsersStore = require('../stores/all_users'),
      ApiUtil = require('../util/api_util'),
      SessionStore = require('../stores/session_store');

const AllUsers = React.createClass({

  getInitialState() {
    return {
      users: [],
      currentUserId: SessionStore.currentUser().id,
      followings: SessionStore.followings()
    };
  },

  componentDidMount() {
    this.usersListener = AllUsersStore.addListener(this.updateUsers);
    this.followListener = SessionStore.addListener(this.follows);
    ApiUtil.fetchAllUsers();
    ApiUtil.fetchAllFollows(this.state.currentUserId);
  },

  componentWillUnmount() {
    this.usersListener.remove();
    this.followListener.remove();
  },


  follows() {
    this.setState({
      followings: SessionStore.followings()
    });
  },

  updateUsers() {
    this.setState({
      users: AllUsersStore.all()
    });
  },

  _goToUsersPage(e) {
    let userId = e.currentTarget.dataset.userid;
    hashHistory.push('user/' + userId);
  },

  _findFollowedUser(userId) {
    if (this.state.users === []) {
      return;
    } else {
      this.state.users.filter(function (user) { return user.id === userId; });
    }
  },

  _followings(){
    let followings = this.state.followings;
    if (Object.keys(followings).length === 0) {
      return <div id="no-friends">Nobody! :( <br></br>
                Click on another user's name <br></br>
                to check out their profile
              </div>;
    }
    let allFollowings = followings.map( (user) => {
      return <button key={user.id}
                  className="followed-user"
                  data-userid={user.id}
                  onClick={this._goToUsersPage}>{user.username}</button>;
    });
    for ( let i = 0; i < allFollowings.length; i += 2) {
      if (allFollowings[i + 1]) {
        allFollowings[i] = <div key={i} className="followings-row">
                              {allFollowings[i]}
                              {allFollowings[i + 1]}
                            </div>;
        allFollowings[i + 1] = "";
      } else {
        allFollowings[i] = <div key={i} className="followings-row">
                              {allFollowings[i]}
                            </div>;
      }
    }
    return allFollowings;
  },

  _allUsers() {
    this.state.users.map( (user) => {
      return <button key={user.id}
                className="all-user-item"
                data-userid={user.id}
                onClick={this._goToUsersPage}>{user.username}</button>;
    });
  },

  render(){
    let followings = this._followings();
    let allUsers = this._allUsers();
    return(
      <div id="followings-index">
        <h3>Cyclists You Follow</h3>
        <div>
          {followings}
        </div>
      </div>
    );
  }
});

module.exports = AllUsers;
