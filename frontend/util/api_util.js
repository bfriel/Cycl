const ApiActions = require('../actions/api_actions');


const ApiUtil = {

  fetchRides() {
    $.ajax({
      url: "api/rides",
      success(rides) {
        ApiActions.receiveAll(rides);
      }
    });
  }
};

module.exports = ApiUtil;
