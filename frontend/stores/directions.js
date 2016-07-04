const Store = require('flux/utils').Store,
      AppDispatcher = require('../dispatcher/dispatcher'),
      RideConstants = require('../constants/ride_constants');

let _directions = {};
let _distance = 0;
let _markers = [];

const DirectionsStore = new Store(AppDispatcher);

DirectionsStore.directions = function () {
  return _directions;
};

DirectionsStore.distance = function () {
  return _distance;
};

DirectionsStore.markers = function () {
  return _markers;
};

DirectionsStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case RideConstants.UPDATE_DIRECTIONS:
      updateDirections(payload.directions);
      break;
    case RideConstants.STORE_MARKERS:
      updateMarkers(payload.markers);
      break;
    case RideConstants.REMOVE_ROUTE:
      resetRoute();
      break;
  }
};


function updateDirections(directions) {
  _directions = directions;
  _distance = directions.routes[0].legs[0].distance.value / 1609;
  DirectionsStore.__emitChange();
}

function updateMarkers(markers) {
  _markers = markers;
}

function resetRoute() {
  _distance = 0;
  DirectionsStore.__emitChange();
}

module.exports = DirectionsStore;
