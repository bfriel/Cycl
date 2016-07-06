const React = require('react'),
      hashHistory = require('react-router').hashHistory,
      AllUsersStore = require('../stores/all_users'),
      ApiUtil = require('../util/api_util'),
      SessionStore = require('../stores/session_store');

const AllUsers = React.createClass({

  getInitialState() {
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

  render(){
    let allUsers = this.state.users.map( (user) => {
      return <div key={user.id}
                className="all-user-item"
                data-userid={user.id}
                onClick={this._goToUsersPage}>{user.username}</div>;
    });
    return(
      <div>
        {allUsers}
      </div>
    );
  }
});

module.exports = AllUsers;
