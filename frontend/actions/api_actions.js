const AppDispatcher = require('../dispatcher/dispatcher'),
      RideConstants = require('../constants/ride_constants');


const ApiActions = {

  receiveAll(rides) {
    AppDispatcher.dispatch({
      actionType: RideConstants.RIDES_RECEIVED,
      rides: rides
    });
  },

  receiveNewRide(newRide){
    AppDispatcher.dispatch({
      actionType: RideConstants.ADD_RIDE,
      ride: newRide
    });
  },

  receiveAllUsers(users) {
    AppDispatcher.dispatch({
      actionType: RideConstants.RECEIVE_ALL_USERS,
      users: users
    });
  }
};

module.exports = ApiActions;
