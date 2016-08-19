const React = require('react'),
      hashHistory = require('react-router').hashHistory,
      SessionStore = require('../stores/session_store');

const RideItem = React.createClass({

  _goToUsersPage() {
    hashHistory.push('user/' + this.props.ride.user_id);
  },

  _goToShow() {
    hashHistory.push('ride/' + this.props.ride.ride_id);
  },

  render(){
    let currentUser = SessionStore.currentUser();
    let ride = this.props.ride;
    let hours = (ride.duration / 3600).toFixed(0);
    let minutes = ((ride.duration % 3600) / 60 ).toFixed(0);
    let seconds = (ride.duration % 60);
    let startImg = "https://maps.googleapis.com/maps/api/staticmap?center=" +
                   ride.start_pos +
                   "&size=300x300&zoom=15&markers=color:blue%7Clabel:S%7C" +
                   ride.start_pos +
                   "&key=" +
                   window.GOOGLE_KEYS.GOOGLE_MAPS;
    return(
      <div className="completed-ride">
        <h2 onClick={this._goToShow}>{ride.ride_name}</h2>
        <h5 onClick={this._goToUsersPage}>{ride.rider}</h5>
        <div className='mini-map' onClick={this._goToShow}>
          <img src={startImg} />
        </div>
      </div>
    );
  }
});

// <div id="completed-ride-details">
//   <table className="table" id="feed-table">
//     <tbody>
//       <tr>
//         <td className="completed-ride-th">Distance</td>
//         <td className="completed-ride-tb">{ride.distance} miles</td>
//       </tr>
//       <tr>
//         <td className="completed-ride-th">Duration</td>
//         <td className="completed-ride-tb">{hours} hours {minutes} minutes {seconds} seconds</td>
//       </tr>
//       <tr>
//         <td className="completed-ride-th">Elevation</td>
//         <td className="completed-ride-tb">{ride.elevation_gain} feet</td>
//       </tr>
//       <tr>
//         <td className="completed-ride-th">Calories</td>
//         <td className="completed-ride-tb">{ride.calories_burned}</td>
//       </tr>
//     </tbody>
//   </table>
// </div>

module.exports = RideItem;
