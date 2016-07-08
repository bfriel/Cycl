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
  },

  fetchAllUsers() {
    $.ajax({
      url: "/api/users",
      method: "GET",
      success(users) {
        ApiActions.receiveAllUsers(users);
      }
    });
  },

  fetchUserTotals(id) {
    $.ajax({
      url: "/api/users/" + id,
      method: "GET",
      success(totals) {
        ApiActions.userTotals(totals);
      }
    });
  },

  followUser(id) {
    $.ajax({
      url: "/api/users/" + id + "/following",
      method: "POST",
      success(follow) {
        ApiActions.addFollowing(follow);
      }
    });
  },

  unfollowUser(id) {
    $.ajax({
      url: "/api/users/" + id + "/following",
      method: "DELETE",
      success(follow) {
        ApiActions.removeFollowing(follow);
      }
    });
  },

  fetchAllFollows(id) {
    $.ajax({
      url: "/api/users/" + id + "/following",
      method: "GET",
      success(follows) {
        ApiActions.receiveFollowings(follows);
      }
    });
  },

  showOldRide(ride) {
    ApiActions.showOldRide(ride);
  },

  removeRide() {
  ApiActions.removeRide();
},

};

module.exports = ApiUtil;
