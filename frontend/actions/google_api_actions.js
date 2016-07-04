const AppDispatcher = require('../dispatcher/dispatcher'),
      RideConstants = require('../constants/ride_constants');

const GoogleApiActions = {
  setDirections(result, status) {
    if (status === "OK") {
      AppDispatcher.dispatch({
        actionType: RideConstants.UPDATE_DIRECTIONS,
        directions: result
      });
    }
  },

  storeMarkers(markers) {
    AppDispatcher.dispatch({
      actionType: RideConstants.STORE_MARKERS,
      markers: markers
    });
  },

  resetElevation() {
    AppDispatcher.dispatch({
      actionType: RideConstants.RESET_CHART
    });
  },

  reciveElevationData(response) {
    AppDispatcher.dispatch({
      actionType: RideConstants.RECEIVE_ELEVATION_DATA,
      data: response
    });
  },
};

module.exports = GoogleApiActions;
