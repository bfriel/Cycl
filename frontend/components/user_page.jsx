const React = require('react'),
      ApiUtil = require('../util/api_util'),
      RideItem = require('./ride_item'),
      UserInfo = require('./user_info'),
      hashHistory = require('react-router').hashHistory,
      SessionStore = require('../stores/session_store'),
      AllUsersStore = require('../stores/all_users'),
      RidesStore = require('../stores/rides');

const UserPage = React.createClass({
  getInitialState(){
    return {
      rides: RidesStore.find(parseInt(this.props.params.userId)),
      currentUser: SessionStore.currentUser()
    };
  },

  componentDidMount() {
    ApiUtil.fetchRides();
    this.rideListener = RidesStore.addListener(this._onChange);

    this.currentUserListener = SessionStore.addListener(this._currentUser);
  },

  componentWillUnmount() {
    this.rideListener.remove();
    this.currentUserListener.remove();
  },

  _onChange(){
    this.setState({
      rides: RidesStore.find(parseInt(this.props.params.userId))
    });
  },

  _currentUser() {
    this.setState({
      currentUser: SessionStore.currentUser()
    });
  },

  componentWillReceiveProps() {
    this.setState({
      rides: RidesStore.find(parseInt(this.props.params.userId))
    });
  },

  _createRide(e){
    e.preventDefault();
    hashHistory.push('/create_ride');
  },

  render() {
    let riderName;
    if (this.state.rides.length === 0) {
      riderName = "Their";
    } else {
      riderName = this.state.rides[0].rider + "'s";
    }

    let header;
    if (parseInt(this.props.params.userId) === this.state.currentUser.id ) {
      header = <h2 id="my-rides">Your Rides</h2>;
    } else {
      header = <h2 id="my-rides">{riderName} Rides</h2>;
    }

    let rides;
    if (this.state.rides.length > 0) {
      rides= this.state.rides.reverse().map( (ride) => {
        return (
          <RideItem ride={ride} key={ride.ride_name} />
        );
      });
    } else if (parseInt(this.props.params.userId) === this.state.currentUser.id) {
      rides = <div id="no-rides-message">
        <p>You haven't made any rides yet!</p>
        <input type="submit" id="no-rides-button" onClick={this._createRide} value="Create a Ride" />
      </div>;
    } else {
      rides = <div id="no-rides-message">
        <p>They don't have any rides yet!</p>
      </div>;
    }


    return (
      <div id="user-container">
        <div className="user-rides">
          {header}
          {rides}
        </div>
        <div className="feed-side-bar">
          <div className="feed-side-bar-item">
            <UserInfo user={parseInt(this.props.params.userId)}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = UserPage;
