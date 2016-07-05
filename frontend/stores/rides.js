const Store = require('flux/utils').Store,
      AppDispatcher = require('../dispatcher/dispatcher'),
      RideConstants = require('../constants/ride_constants');

let _rides = [];

const RidesStore = new Store(AppDispatcher);

RidesStore.rides = function () {
  return _rides;
};

RidesStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case RideConstants.ADD_RIDES:
      addRide(payload.ride);
      break;
    case RideConstants.RECIVE_SAVED_RIDES:
      updateRides(payload.rides);
      break;
  }
};

function addRide(ride) {
  _rides.push(ride);
  RidesStore.__emitChange();
}

function updateRides(rides) {
  _rides = rides;
  RidesStore.__emitChange();
}

module.exports = RidesStore;
