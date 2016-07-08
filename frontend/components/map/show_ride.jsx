const React = require('react');

const ElevationChart = require('./elevation_chart'),
      RideMap = require('./create_ride_map'),
      ApiUtil = require ('../../util/api_util'),
      RidesStore = require('../../stores/rides'),
      OldRideStore = require('../../stores/old_ride'),
      RideInfo = require('./ride_info');

const CreateRide = React.createClass({

  getInitialState() {
    return { ride: RidesStore.findOldRide(parseInt(this.props.params.rideId)) };
  },

  componentDidMount(){
    ApiUtil.showOldRide(this.state.ride);
  },

  render() {
    let ride = this.state.ride;
    return (
      <div className="create-ride-page clear-fix">
        <div className="instructions clear-fix">
            <h5>{ride.ride_name}</h5>
        </div>
        <div className="block-for-map">
          <RideMap ride={ride} />
        </div>
        <div className="ride-info-pane">
          <RideInfo rideStatus="old" ride={ride} />
        </div>
        <div className="elev-chart">
          <ElevationChart ride={ride} />
        </div>
      </div>
    );
  }
});

module.exports = CreateRide;
