const React = require('react'),
      hashHistory = require('react-router').hashHistory,
      SessionStore = require('../stores/session_store'),
      CommentIndex = require('./comment_index');

const RideItem = React.createClass({

  _goToUsersPage() {
    hashHistory.push('user/' + this.props.ride.user_id);
  },

  _goToShow() {
    hashHistory.push('ride/' + this.props.ride.ride_id);
  },

  render(){
    let ride = this.props.ride;
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

module.exports = RideItem;
