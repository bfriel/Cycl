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

RidesStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case RideConstants.ADD_RIDE:
      addRide(payload.ride);
      break;
    case RideConstants.RIDES_RECEIVED:
      resetAllRides(payload.rides);
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

module.exports = RidesStore;
