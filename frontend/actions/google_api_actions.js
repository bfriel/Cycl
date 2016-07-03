const AppDispatcher = require('../dispatcher/dispatcher'),
      RideConstants = require('../constants/ride_constants');

const GoogleApiActions = {
  setDirections: function (result, status) {
    if (status === "OK") {
      AppDispatcher.dispatch({
        actionType: RideConstants.UPDATE_DIRECTIONS,
        directions: result
      });
    }
  },

  storeMarkers: function (markers) {
    AppDispatcher.dispatch({
      actionType: RideConstants.STORE_MARKERS,
      markers: markers
    });
  }
};

module.exports = GoogleApiActions;
