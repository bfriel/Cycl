const React = require('react');
const UserInfoPane = require('./user_info'),
      RidesStore = require('../stores/rides'),
      ApiUtil = require('../util/api_util'),
      RideItem = require('./ride_item'),
      SessionStore = require('../stores/session_store'),
      AllUsersPane = require('./all_users');

const Feed = React.createClass({
  getInitialState(){
    return {
      rides: RidesStore.rides()
    };
  },

  componentDidMount() {
    ApiUtil.fetchRides();
    this.rideListener = RidesStore.addListener(this._onChange);
  },

  _onChange(){
    this.setState({
      rides: RidesStore.rides()
    });
  },

  componentWillReceiveProps() {
    this.setState({
      rides: RidesStore.rides()
    });
  },

  render() {
    let rides = this.state.rides.map( (ride) => {
      return (
        <RideItem ride={ride} key={ride.ride_name} />
      );
    });
    return (
      <div className="feed-container">
        <div className="intro-message">
          <h3>Welcome to Cycl!</h3>
          <p>As a warmup, check out some recent rides from the Cycl community below</p>
          <p>When you're read to start mapping, click on the Create a Route button above!</p>
          <div className="feed">
            {rides}
          </div>
        </div>

        <div className="feed-side-bar">
          <div className="feed-side-bar-item">
            <AllUsersPane />
          </div>
        </div>


      </div>
    );
  }
});

module.exports = Feed;
