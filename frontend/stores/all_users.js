const Store = require('flux/utils').Store,
      AppDispatcher = require('../dispatcher/dispatcher'),
      RideConstants = require('../constants/ride_constants');

let _users = {};

const AllUsersStore = new Store(AppDispatcher);

AllUsersStore.all = function () {
  return _users;
};

AllUsersStore.find = function(userId) {
  return _users[userId];
};

AllUsersStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case RideConstants.RECEIVE_ALL_USERS:
      updateUsers(payload.users);
      break;
  }
};

function updateUsers(users) {
  _users = users;
  AllUsersStore.__emitChange();
}

module.exports = AllUsersStore;
