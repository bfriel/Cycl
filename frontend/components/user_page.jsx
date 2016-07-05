const React = require('react'),
      ApiUtil = require('../util/api_util'),
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
        <div className="completed-ride" key={ride.id}>
          <div id="compelted-ride-name">
            {ride.ride_name}
          </div>
          <div className="completed-ride-stats">
            <div id="completed-ride-distance">
              Distance: {ride.elevation_gain} miles
            </div>
            <div id="completed-ride-duration">
              Duration: {ride.durationHour} : {ride.durationMinute} : {ride.durationSecond}
            </div>
            <div id="completed-ride-elev">
              Elevation Gain: {ride.elevation_gain} feet
            </div>
            <div id="completed-ride-calories">
              Calories Burned: {ride.calories_burned}
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="showallrides">
          {rides}
        </div>
      </div>
    );
  }
});

module.exports = UserPage;
