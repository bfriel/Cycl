const AppDispatcher = require('../dispatcher/dispatcher'),
      RideConstants = require('../constants/ride_constants');


const ApiActions = {

  receiveAll(rides) {
    AppDispatcher.dispatch({
      actionType: RideConstants.RIDES_RECEIVED,
      rides: rides
    });
  }
};
