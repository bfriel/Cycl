const React = require('react'),
      hashHistory = require('react-router').hashHistory,
      AllUsersStore = require('../stores/all_users'),
      ApiUtil = require('../util/api_util'),
      SessionStore = require('../stores/session_store');

const AllUsers = React.createClass({

  getInitialState() {
    console.log(SessionStore.followings());
    return {
      users: [],
      followings: SessionStore.followings()
    };
  },

  componentDidMount() {
    this.usersListener = AllUsersStore.addListener(this.updateUsers);
    this.followListener = SessionStore.addListener(this.follows);
    ApiUtil.fetchAllUsers();
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
      return <div id="no-friends">Nobody! :( Click on another user's name to check out their profile</div>;
    }
    let yourFollowings = followings.map(function (user) {
      return <div key={user.id}
                  className="followed-user"
                  data-userid={user.id}
                  onClick={this._goToUsersPage}>{user.username}</div>;
    }.bind(this));
    return yourFollowings;
    },

  render(){
    let followings = this._followings();
    let allUsers = this.state.users.map( (user) => {
      return <div key={user.id}
                className="all-user-item"
                data-userid={user.id}
                onClick={this._goToUsersPage}>{user.username}</div>;
    });
    return(
      <div>
        <h3>Users You Follow</h3>
        <div>
          {followings}
        </div>
      </div>
    );
  }
});

module.exports = AllUsers;
