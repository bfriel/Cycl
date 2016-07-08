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

  _getTime(seconds){
    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor(seconds / 60 % 60);
    let secs = Math.floor(seconds % 60);
    let digitalTime = '';

    if (hours < 10) {
      digitalTime += '0' + hours + ':';
    } else {
      digitalTime += hours + ':';
    }

    if (mins < 10) {
      digitalTime += '0' + mins + ':';
    } else {
      digitalTime += mins + ':';
    }

    if (secs < 10) {
      digitalTime += '0' + secs;
    } else {
      digitalTime += secs;
    }

    return digitalTime;
  },

  render() {
    let rideForm;
    let header;
    let rideData;
    let rideDescription;
    let ride = this.props.ride;
    if (this.props.rideStatus === "new") {
      rideForm = <CreateRideForm distance={this.state.distance}
                      elevation_gain={(this.state.gain * 3.28).toFixed(0)}
                      calories_burned={(this.state.distance * 40).toFixed(0)} />;
      header = <h3>Ride Stats</h3>;
      rideData = <tr></tr>;
      rideDescription = "";
    } else if (this.props.rideStatus === "old") {
      let duration = this._getTime(ride.duration);
      rideForm =  <div>
                    <CommentsIndex ride={ride} />
                  </div>;
      header = <div id="old-ride-header">
                  <h3>{ride.ride_name}</h3>
                  <p onClick={this._goToUsersPage}>By {ride.rider}</p>
                </div>;
      rideData = <tr>
                  <th>Duration</th>
                  <td>{duration}</td>
                </tr>;
      rideDescription = <div id="old-ride-description-container">
                          <div id="old-ride-description-text">
                            {ride.ride_description}
                          </div>
                        </div>;
    }

    return (
      <div>
        <div className="ride-stats" id="ride-metrics">
          {header}
          <div className="container">
            <table className="table">
              <tbody>
                <tr>
                  <th>Distance</th>
                  <td>{this.state.distance} miles</td>
                </tr>
                  {rideData}
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
            {rideDescription}
          </div>
        </div>
        <div className="ride-stats" id="ride-input">
          {rideForm}

        </div>
      </div>
    );
  }
});

module.exports = RideInfo;
