const Store = require('flux/utils').Store,
      AppDispatcher = require('../dispatcher/dispatcher'),
      RideConstants = require('../constants/ride_constants');

let _rides = [];

const RidesStore = new Store(AppDispatcher);

RidesStore.rides = function () {
  return _rides;
};

RidesStore.find = function (userId) {
  let result = [];
  if (!_rides) { return []; }
  _rides.forEach( (ride) => {
    if (ride.user_id === userId) {
      result.push(ride);
    }
  });

  return result;
};

RidesStore.findOldRide = function (rideId) {
  for (var i = 0; i < _rides.length; i++) {
    if (_rides[i].ride_id === rideId) {
      return _rides[i];
    }
  }
};

RidesStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case RideConstants.ADD_RIDE:
      addRide(payload.ride);
      break;
    case RideConstants.RIDES_RECEIVED:
      resetAllRides(payload.rides);
      break;
    case RideConstants.NEW_COMMENT:
      addComment(payload.comment);
      break;
  }
};

function resetAllRides(rides) {
  _rides = rides;
  RidesStore.__emitChange();
}

function addRide(ride) {
  _rides.push(ride);
  RidesStore.__emitChange();
}

function addComment(comment) {
  let ride = RidesStore.findOldRide(comment.ride_id);
  ride.comments.push(comment);
  RidesStore.__emitChange();
}

module.exports = RidesStore;
