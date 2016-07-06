const React = require('react');

const RideItem = React.createClass({


  render(){
    let ride = this.props.ride;
    let hours = (ride.duration / 3600).toFixed(0);
    let minutes = ((ride.duration % 3600) / 60 ).toFixed(0);
    let seconds = (ride.duration % 60);
    let startImg = "https://maps.googleapis.com/maps/api/staticmap?center=" +
                   ride.start_pos +
                   "&size=200x200&zoom=15&markers=color:green%7Clabel:S%7C" +
                   ride.start_pos +
                   "&key=" +
                   window.GOOGLE_KEYS.GOOGLE_MAPS;
    return(
      <div className="completed-ride">
        <div id="completed-ride-info">
          <div id="compelted-ride-name">
            <h2>{ride.ride_name}</h2>
          </div>

          <div id="completed-ride-details">
            <table className="table">
              <tbody>
                <tr>
                  <td className="completed-ride-td">Distance</td>
                  <td className="completed-ride-td">{ride.distance} miles</td>
                </tr>
                <tr>
                  <td className="completed-ride-td">Duration</td>
                  <td className="completed-ride-td">{hours} hours {minutes} minutes {seconds} seconds</td>
                </tr>
                <tr>
                  <td className="completed-ride-td">Elevation</td>
                  <td className="completed-ride-td">{ride.elevation_gain} feet</td>
                </tr>
                <tr>
                  <td className="completed-ride-td">Calories Burned</td>
                  <td className="completed-ride-td">{ride.calories_burned}</td>
                </tr>
                <tr>
                  <td className="completed-ride-td">Description</td>
                  <td className="completed-ride-td">{ride.ride_description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='mini-map'>
          <img src={startImg} />
        </div>
      </div>
    );
  }
});

module.exports = RideItem;
