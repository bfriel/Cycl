const React = require('react');

const ElevationChart = require('./elevation_chart'),
      CreateRideMap = require('./create_ride_map'),
      RideInfo = require('./ride_info');

const CreateRide = React.createClass({
  render() {
    return (
      <div className="create-ride-page">
        <div className="create-ride-container clear-fix">
          <div className="instructions clear-fix">
            <h5>Click on the map below to start mapping your ride!</h5>
          </div>
          <div className="block-for-map">
            <CreateRideMap />
          </div>
          <div className="ride-info-pane">
            <RideInfo rideStatus="new"/>
          </div>
          <div className="elev-chart">
            <ElevationChart />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CreateRide;
