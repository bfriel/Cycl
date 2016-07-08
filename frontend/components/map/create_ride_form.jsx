const React = require('react'),
      hashHistory = require('react-router').hashHistory;

const ApiUtil = require('../../util/api_util'),
      RidesStore = require('../../stores/rides'),
      SessionStore = require('../../stores/session_store'),
      DirectionsStore = require('../../stores/directions');


const CreateRideForm = React.createClass({

  blankAttrs: {
    ride_path: '',
    ride_name: '',
    elevation_gain: '',
    distance: '',
    ride_description: '',
    durationHour: '',
    durationMinute: '',
    durationSecond: '',
    duration: '',
    calories_burned: '',
    user_id: '',
    start_pos: '',
    rider: ''
  },

  getInitialState() {
    this.newRide = true;
    return this.blankAttrs;
  },

  componentDidMount(){
    ApiUtil.fetchRides();
    this.routeListener = RidesStore.addListener(this._updateRides);
  },

  componentWillUnmount(){
    this.routeListener.remove();
  },

  _updateRides(){
    if (RidesStore.rides()[0]) {
      this.setState({
        rides: RidesStore.rides()
      });
    }
  },

  createRide(e) {
    e.preventDefault();
    let ride = {};
    let durationInSeconds = 0;

    Object.keys(this.state).forEach( (key) => {
      if (key === "durationHour") {
        durationInSeconds += (parseInt(this.state[key]) * 3600);
      } else if (key === "durationMinute") {
        durationInSeconds += (parseInt(this.state[key]) * 60);
      } else if (key === "durationSecond") {
        durationInSeconds += (parseInt(this.state[key]));
      } else {
        ride[key] = this.state[key];
      }
    });

    ride.elevation_gain = parseInt(this.props.elevation_gain);
    ride.distance = parseInt(this.props.distance);
    ride.calories_burned = parseInt(this.props.calories_burned);
    ride.duration = durationInSeconds;
    ride.rider = SessionStore.currentUser().username;

    let path = DirectionsStore.markers().map( (marker) => {
      return [marker.position.lat(), marker.position.lng()];
    });
    ride.ride_path = JSON.stringify(path);
    let allMarkers = DirectionsStore.markers();
    let startMarker = allMarkers[allMarkers.length - 1].position;
    ride.start_pos = startMarker.lat() + "," + startMarker.lng();
    ApiUtil.createRide(ride, function() {
      ApiUtil.fetchRides();
    });

    hashHistory.push("user/" + SessionStore.currentUser().id);
    // if (this.newRide) {
    //   return;
    // }
  },

  selectRide(e) {
    let rideString = e.currentTarget.selectedOptions[0].dataset.ride;

    if (rideString) {
      let ride = JSON.parse(rideString);
      this.setState({
        ride_name: ride.ride_name,
        ride_description: ride.ride_description
      });
      ApiUtil.showOldRide(ride);
      this.newRoute = false;

    } else {
      this.setState({
        ride_name: "",
        ride_description: "",
        distance: ""
      });
      ApiUtil.removeRide();
      this.newRoute = true;
    }
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

  render() {
    let rides;
    if (this.state.rides){
      rides = RidesStore.rides().map( (ride, idx) => {
        if (ride.user_id === SessionStore.currentUser().id) {
          return <option key={idx} data-ride={JSON.stringify(ride)}>{ride.ride_name}</option>;
        }
      });
    }

    return(
      <form className="ride-form" onSubmit={this.createRide}>
        <h3>Ride Details</h3>

        <div className="ride-form-item">
          <div className="ride-form-title">
              <input type="text"
                value={this.state.name}
                placeholder="Name your route"
                id="ride-name"
                onChange={this.update("ride_name")} />

              <select id="existing-ride-drpdwn" onChange={this.selectRide}>
              <option>Choose existing route</option>
              {rides}
            </select>
          </div>
        </div>

        <div className="ride-form-item" id="time-form">
          <div id="duration-label">Duration:</div>
          <div className="ride-form-item">
            <input type="text"
              id="ride-duration-hour"
              placeholder="hh"
              maxLength="2"
              value={this.state.durationHour}
              onChange={this.update("durationHour")}/>
          </div>
          <div className="ride-form-item">
            <input type="text"
              id="ride-duration-minute"
              placeholder="mm"
              maxLength="2"
              value={this.state.durationMinute}
              onChange={this.update("durationMinute")}/>
          </div>
          <div className="ride-form-item">
            <input type="text"
              id="ride-duration-second"
              placeholder="ss"
              maxLength="2"
              value={this.state.durationSecond}
              onChange={this.update("durationSecond")}/>
          </div>
        </div>

        <div className="ride-form-item">
          <textarea id="workout-description"
            value={this.state.description}
            placeholder="Describe your ride"
            onChange={this.update("ride_description")}  />
        </div>

        <input id="create-ride-button" type="submit" value="Create Ride" />
      </form>
    );

  }
});

module.exports = CreateRideForm;
