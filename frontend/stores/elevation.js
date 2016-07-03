const Store = require('flux/utils').Store,
      AppDispatcher = require('../dispatcher/dispatcher'),
      RideConstants = require('../constants/ride_constants');

var _elevations = {};
var _elevationGain = 0;
const ElevationStore = new Store(AppDispatcher);

ElevationStore.elevations = function () {
  return _elevations;
};

ElevationStore.gain = function () {
  return _elevationGain;
};

ElevationStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case RideConstants.RECIVE_ELEVATION_DATA:
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

var updateElevations = function (elevation) {
  _elevations = elevation;
  computeGain(elevation);
  ElevationStore.__emitChange();
};

var computeGain = function (elevations) {
  var gain = 0;
  for (var i = 1; i < elevations.length - 1; i++) {
    if (elevations[i - 1].elevation < elevations[i].elevation) {
      gain += elevations[i].elevation - elevations[i - 1].elevation;
    }
  }

  _elevationGain = gain;
};

var resetElevation = function () {
  _elevations = {};
  _elevationGain = 0;
  ElevationStore.__emitChange();
};

module.exports = ElevationStore;
