const React = require('react'),
      ApiUtil = require('../util/api_util'),
      RideItem = require('./ride_item'),
      RidesStore = require('../stores/rides');

const UserPage = React.createClass({
  getInitialState(){
    return {
      rides: RidesStore.find(parseInt(this.props.params.userId))
    };
  },

  componentDidMount() {
    ApiUtil.fetchRides();
    this.rideListener = RidesStore.addListener(this._onChange);
  },

  _onChange(){
    this.setState({
      rides: RidesStore.find(parseInt(this.props.params.userId))
    });
  },

  componentWillReceiveProps() {
    this.setState({
      rides: RidesStore.find(parseInt(this.props.params.userId))
    });
  },

  render() {
    let rides = this.state.rides.map( (ride) => {
      return (
        <RideItem ride={ride} key={ride.ride_name} />
      );
    });
    return (
      <div>
        <div className="user-info">

        </div>
        <div className="feed">
          <h2 id="my-rides">My Rides</h2>
          {rides}
        </div>
      </div>
    );
  }
});

module.exports = UserPage;
