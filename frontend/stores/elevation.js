const Store = require('flux/utils').Store,
      AppDispatcher = require('../dispatcher/dispatcher'),
      RideConstants = require('../constants/ride_constants');

let _elevations = {};
let _elevationGain = 0;

const ElevationStore = new Store(AppDispatcher);

ElevationStore.elevations = function () {
  return _elevations;
};

ElevationStore.gain = function () {
  return _elevationGain;
};

ElevationStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case RideConstants.RECEIVE_ELEVATION_DATA:
      updateElevations(payload.data);
      break;
    case RideConstants.RESET_CHART:
      resetElevation();
      break;
    case RideConstants.REMOVE_ROUTE:
      resetElevation();
      break;
  }
};

function updateElevations(elevation) {
  _elevations = elevation;
  computeGain(elevation);
  ElevationStore.__emitChange();
}

function computeGain(elevations) {
  var gain = 0;
  for (var i = 1; i < elevations.length - 1; i++) {
    if (elevations[i - 1].elevation < elevations[i].elevation) {
      gain += elevations[i].elevation - elevations[i - 1].elevation;
    }
  }

  _elevationGain = gain;
}

function resetElevation() {
  _elevations = {};
  _elevationGain = 0;
  ElevationStore.__emitChange();
}

module.exports = ElevationStore;
