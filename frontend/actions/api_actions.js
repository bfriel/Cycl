const AppDispatcher = require('../dispatcher/dispatcher'),
      UserConstants = require('../constants/user_constants'),
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
      actionType: UserConstants.RECEIVE_ALL_USERS,
      users: users
    });
  },

  userTotals(totals) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_TOTALS,
      totals: totals
    });
  },

  addFollowing(following) {
    AppDispatcher.dispatch({
      actionType: UserConstants.ADD_FOLLOWING,
      following: following
    });
  },

  removeFollowing(following) {
    AppDispatcher.dispatch({
      actionType: UserConstants.REMOVE_FOLLOWING,
      following: following
    });
  },

  receiveFollowings(followings) {
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVE_FOLLOWINGS,
      followings: followings
    });
  },

  showOldRide(ride) {
    AppDispatcher.dispatch({
      actionType: RideConstants.SHOW_OLD_RIDE,
      ride: ride
    });
  },
};

module.exports = ApiActions;
