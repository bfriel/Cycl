const React = require('react');

const ElevationChart = require('./elevation_chart'),
      CreateRideMap = require('./create_ride_map'),
      RideInfo = require('./ride_info');

const CreateRide = React.createClass({
  render: function () {
    return (
      <div className="create-route-page clear-fix">
        <div className="instructions clear-fix">
            <h5>Click on the map below to start mapping your ride!</h5>
        </div>
        <div className="block-for-map">
          <CreateRideMap />
        </div>
        <div className="map-tools">
          <RideInfo />
        </div>
        <div className="route-info-pane">
          <ElevationChart />
        </div>
      </div>
    );
  }
});

module.exports = CreateRide;
