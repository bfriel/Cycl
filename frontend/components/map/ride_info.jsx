const React = require('react'),
      ElevationChart = require('./elevation_chart'),
      DirectionsStore = require('../../stores/directions'),
      ElevationStore = require('../../stores/elevation');

const RideInfo = React.createClass({
  getInitialState: function () {
    return {
      distance: 0,
      gain: 0
    };
  },

  componentDidMount: function () {
    this.distanceListener = DirectionsStore.addListener(this._updateDistance);
    this.elevationListener = ElevationStore.addListener(this._updateElevation);
  },

  componentWillUnmount: function () {
    this.distanceListener.remove();
    this.elevationListener.remove();
  },

  _updateDistance: function () {
    this.setState({ distance: DirectionsStore.distance().toFixed(2) });
  },

  _updateElevation: function () {
    this.setState({ gain: ElevationStore.gain().toFixed(0) });
  },

  render: function () {
    return (
      <div className="route-stats">
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
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});

module.exports = RideInfo;
