const React = require('react'),
      ElevationChart = require('./elevation_chart'),
      CreateRideForm = require('./create_ride_form'),
      DirectionsStore = require('../../stores/directions'),
      ElevationStore = require('../../stores/elevation');

const RideInfo = React.createClass({
  getInitialState() {
    return {
      distance: 0,
      gain: 0
    };
  },

  componentDidMount() {
    this.distanceListener = DirectionsStore.addListener(this._updateDistance);
    this.elevationListener = ElevationStore.addListener(this._updateElevation);
  },

  componentWillUnmount() {
    this.distanceListener.remove();
    this.elevationListener.remove();
  },

  _updateDistance() {
    this.setState({ distance: DirectionsStore.distance().toFixed(2) });
  },

  _updateElevation() {
    this.setState({ gain: ElevationStore.gain().toFixed(0) });
  },

  render() {
    return (
      <div className="ride-stats">
        <h3>Route Stats</h3>
        <div className="container">
          <table className="table">
            <tbody>
              <tr>
                <th>Distance</th>
                <td>{this.state.distance} miles</td>
              </tr>
              <tr>
                <th>Elevation Gain</th>
                <td>{(this.state.gain * 3.28).toFixed(0)} feet</td>
              </tr>
              <tr>
                <th>Calories Burned</th>
                <td>{(Math.round(this.state.distance * 40))}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CreateRideForm />
      </div>
    );
  }
});

module.exports = RideInfo;
