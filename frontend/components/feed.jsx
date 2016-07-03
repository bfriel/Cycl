const React = require('react');
const UserInfoPane = require('./user_info'),
      AllUsersPane = require('./all_users');

const Feed = React.createClass({
  render() {
    return (
      <div className="feed-container">
        <div className="intro-message">
          <h3>Welcome to Cycl!</h3>
          <p>As a warmup, check out some recent rides from the Cycl community below</p>
          <p>When you're read to start mapping, click on the Create a Route button above!</p>
        </div>

        <div className="feed-side-bar">
          <div className="feed-side-bar-item">
            <UserInfoPane />
          </div>
          <div className="feed-side-bar-item">
            <AllUsersPane />
          </div>
        </div>


      </div>
    );
  }
});

module.exports = Feed;
