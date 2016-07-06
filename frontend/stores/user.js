const Store = require('flux/utils').Store,
      AppDispatcher = require('../dispatcher/dispatcher'),
      UserConstants = require('../constants/user_constants');

let _userTotals = {};
const UserStore = new Store(AppDispatcher);

UserStore.totals = function () {
  return _userTotals;
};

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.USER_TOTALS:
      updateTotals(payload.totals);
      break;
  }
};

function updateTotals(totals) {
  _userTotals = totals;
  UserStore.__emitChange();
}

module.exports = UserStore;
