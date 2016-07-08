const Store = require('flux/utils').Store,
      AppDispatcher = require('../dispatcher/dispatcher'),
      RideConstants = require('../constants/ride_constants');

let _oldRide= {};

const OldRideStore = new Store(AppDispatcher);

OldRideStore.ride = function () {
  return _oldRide;
};

OldRideStore.find = function (id) {
  return _oldRide[id];
};

OldRideStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case RideConstants.SHOW_OLD_RIDE:
      updateOldRide(payload.ride);
      break;
    case RideConstants.REMOVE_RIDE:
      removeRide();
      break;
  }
};

function updateOldRide(ride) {
  _oldRide = ride;
  OldRideStore.__emitChange();
}

function removeRide() {
  _oldRide = {};
  OldRideStore.__emitChange();
}

module.exports = OldRideStore;
