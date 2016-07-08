const React = require('react'),
      hashHistory = require('react-router').hashHistory,
      ElevationChart = require('./elevation_chart'),
      CreateRideForm = require('./create_ride_form'),
      DirectionsStore = require('../../stores/directions'),
      CommentsIndex = require('../comment_index'),
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

  _goToUsersPage(){
    hashHistory.push('user/' + this.props.ride.user_id);
  },

  render() {
    let rideForm;
    let header;
    if (this.props.rideStatus === "new") {
      rideForm = <CreateRideForm distance={this.state.distance}
                      elevation_gain={(this.state.gain * 3.28).toFixed(0)}
                      calories_burned={(this.state.distance * 40).toFixed(0)} />;
      header = <h3>Ride Stats</h3>;
    } else if (this.props.rideStatus === "old") {
      rideForm =  <div>
                    <div id="old-ride-description">
                      {this.props.ride.ride_description}
                    </div>
                    <CommentsIndex ride={this.props.ride} />
                  </div>;
      header = <div id="old-ride-header">
                  <h3>{this.props.ride.ride_name}</h3>
                  <p onClick={this._goToUsersPage}>By {this.props.ride.rider}</p>
                </div>;
    }

    return (
      <div className="ride-stats">
        {header}
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
                <td>{(this.state.distance * 40).toFixed(0)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {rideForm}
      </div>
    );
  }
});

module.exports = RideInfo;
