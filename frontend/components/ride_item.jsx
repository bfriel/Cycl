const React = require('react'),
      hashHistory = require('react-router').hashHistory,
      SessionStore = require('../stores/session_store'),
      CommentIndex = require('./comment_index'),
      CommentForm = require('./comment_form');

const RideItem = React.createClass({

  _goToUsersPage() {
    hashHistory.push('user/' + this.props.ride.user_id);
  },

  _goToShow() {
    hashHistory.push('ride/' + this.props.ride.ride_id);
  },

  getComments() {
    let comments = this.props.ride.comments.map( (comment) => {
      return (
        <div key={comment.id} className="ride-item-comment-item">
          <span className="underline" onClick={this._goToUsersPage}>{comment.author}</span>
          :{' '}
          <span>{comment.body}</span>
        </div>
      );
    });
    return comments;
  },

  render(){
    let ride = this.props.ride;
<<<<<<< HEAD
=======
    let comments = this.getComments();
    // let hours = (ride.duration / 3600).toFixed(0);
    // let minutes = ((ride.duration % 3600) / 60 ).toFixed(0);
    // let seconds = (ride.duration % 60);
>>>>>>> inline-block
    let startImg = "https://maps.googleapis.com/maps/api/staticmap?center=" +
                   ride.start_pos +
                   "&size=500x500&zoom=15&markers=color:blue%7Clabel:S%7C" +
                   ride.start_pos +
                   "&key=" +
                   window.GOOGLE_KEYS.GOOGLE_MAPS;
    return(
      <div className="ride-item">
        <div className="ride-item-info">
          <h2 className="underline" onClick={this._goToShow}>{ride.ride_name}</h2>
          <div className="ride-item-info-details">
            <h5 className="underline" onClick={this._goToUsersPage}>{ride.rider}</h5>
            {' '}
            <span className="small-bar"></span>
            {' '}
            <span>{ride.distance} mi</span>
          </div>
          <div className="ride-item-comments">
            <CommentIndex ride={ride} />
          </div>
        </div>
        <div className="mini-map" onClick={this._goToShow}>
          <img src={startImg}  />
        </div>
      </div>
    );
  }
});

<<<<<<< HEAD
=======
// <table className="table" id="feed-table">
//   <tbody>
//     <tr>
//       <td className="ride-item-th">Distance</td>
//       <td className="ride-item-tb">{ride.distance} miles</td>
//     </tr>
//     <tr>
//       <td className="ride-item-th">Duration</td>
//       <td className="ride-item-tb">{hours} hours {minutes} minutes {seconds} seconds</td>
//     </tr>
//     <tr>
//       <td className="ride-item-th">Elevation</td>
//       <td className="ride-item-tb">{ride.elevation_gain} feet</td>
//     </tr>
//     <tr>
//       <td className="ride-item-th">Calories</td>
//       <td className="ride-item-tb">{ride.calories_burned}</td>
//     </tr>
//   </tbody>
// </table>

>>>>>>> inline-block
module.exports = RideItem;
