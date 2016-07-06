const Store = require('flux/utils').Store,
      AppDispatcher = require('../dispatcher/dispatcher'),
      UserConstants = require('../constants/user_constants');

let _users = {};

const AllUsersStore = new Store(AppDispatcher);

AllUsersStore.all = function () {
  return _users;
};

AllUsersStore.find = function(userId) {
  if (_users = {}) {
    return;
  } else {
    _users.filter(function (user) { return user.id === userId; });
  }
  // for (var k in _users) {
  //   if (_users.hasOwnProperty(k)) {
  //     if (k.id === userId) {
  //       return k;
  //     }
  //   }
  // }
};

AllUsersStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.RECEIVE_ALL_USERS:
      updateUsers(payload.users);
      break;
  }
};

function updateUsers(users) {
  _users = users;
  AllUsersStore.__emitChange();
}

module.exports = AllUsersStore;
