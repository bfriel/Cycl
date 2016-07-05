const ApiActions = require('../actions/api_actions');


const ApiUtil = {

  fetchRides() {
    $.ajax({
      url: "api/rides",
      success(rides) {
        ApiActions.receiveAll(rides);
      }
    });
  },

  createRide(ride, callback) {
    $.ajax({
      url: "api/rides",
      method: "POST",
      data: {ride: ride},
      success(newRide) {
        ApiActions.receiveNewRide(newRide);
        callback();
      }
    });
  }
};

module.exports = ApiUtil;
