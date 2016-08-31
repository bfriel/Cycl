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
    let ride = this.props.ride;
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

module.exports = RideItem;
