"use strict";

const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants'),
      UserConstants = require('../constants/user_constants');

const SessionStore = new Store(AppDispatcher);

let _currentUser = {};
let _followings = {};
let _currentUserHasBeenFetched = false;

function _login(currentUser) {
  _currentUser = currentUser;
  _currentUserHasBeenFetched = true;
}

function _logout() {
  _currentUser = {};
  _currentUserHasBeenFetched = true;
}

function _removeFollowing(following) {
  var idx = -1;
  _followings.forEach(function (follow, i) {
    if (follow.id === following.id) {
      idx = i;
    }
  });

  if (idx >= 0) {
    _followings.splice(idx, 1);
  }
  SessionStore.__emitChange();
}

function _addFollowing(following) {
  _followings.push(following);
  SessionStore.__emitChange();
}

SessionStore.__onDispatch = (payload) => {
  switch(payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentUser);
      SessionStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
    	_logout();
      SessionStore.__emitChange();
      break;
    case UserConstants.ADD_FOLLOWINGS:
      _addFollowing(payload.following);
      break;
    case UserConstants.REMOVE_FOLLOWING:
      _removeFollowing(payload.following);
      break;
  }
};

SessionStore.followings = function() {
  return _followings;
};

SessionStore.currentUser = function() {
  return Object.assign({}, _currentUser);
};

SessionStore.currentUserHasBeenFetched = function () {
  return !!_currentUserHasBeenFetched;
};

SessionStore.isUserLoggedIn = function() {
  return !!_currentUser.id;
};

module.exports = SessionStore;
