const React = require('react');

const ApiUtil = require('../../util/api_util'),
      RidesStore = require('../../stores/rides');


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
    existing_ride: '',
    rides: null
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
    }).bind(this);

    if (this.newRide) {
      ride.elevation_gain = ElevationStore.gain().toFixed(0);
      ride.distance = DirectionsStore.distance().toFixed(2);
      let path = DirectionsStore.markers().map( (marker) => {
        return [marker.position.lat(), marker.position.lng()];
      });
      ride.ride_path = JSON.stringify(path);
    }
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

  render() {
    let rides;
    if (this.state.rides){
      rides = RidesStore.rides().map( (ride, idx) => {
        return <option key={idx} data-ride={JSON.stringify(ride)}>{ride.name}</option>;
      });
    }

    return(
      <form className="ride-form" onSubmit={this.createWorkout}>
        <h3>Route Details</h3>

        <div className="ride-form-item">
          <div className="ride-form-title">
              <input type="text"
                value={this.state.name}
                placeholder="Name your ride"
                id="ride-name"
                onChange={this.update("ride_name")} />

            <select id="existing-ride-drpdwn" onChange={this.selectRoute}>
              <option>Choose existing ride</option>
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
