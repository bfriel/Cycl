const Store = require('flux/utils').Store,
      AppDispatcher = require('../dispatcher/dispatcher'),
      RideConstants = require('../constants/ride_constants');

let _oldRide= {};

const OldRideStore = new Store(AppDispatcher);

OldRideStore.route = function () {
  return _oldRide;
};

OldRideStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case RideConstants.SHOW_OLD_ROUTE:
      updateOldRide(payload.route);
      break;
    case RideConstants.REMOVE_ROUTE:
      removeRide();
      break;
  }
};

function updateOldRide(route) {
  _oldRide= route;
  OldRideStore.__emitChange();
}

function removeRide() {
  _oldRide= {};
  OldRideStore.__emitChange();
}

module.exports = OldRideStore;
