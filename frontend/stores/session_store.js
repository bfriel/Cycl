"use strict";

const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants'),
      UserConstants = require('../constants/user_constants');

const SessionStore = new Store(AppDispatcher);

let _currentUser = {};
let _followings = [];
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
}

function _addFollowing(following) {
  _followings.push(following);
}

function _resetFollowings(followings) {
  _followings = followings;
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
    case UserConstants.ADD_FOLLOWING:
      _addFollowing(payload.following);
      SessionStore.__emitChange();
      break;
    case UserConstants.REMOVE_FOLLOWING:
      _removeFollowing(payload.following);
      SessionStore.__emitChange();
      break;
    case UserConstants.RECEIVE_FOLLOWINGS:
      _resetFollowings(payload.followings);
      SessionStore.__emitChange();
  }
};

SessionStore.followings = function() {
  let usersFollowings = [];

  _followings.map( (following) => {
    if (following.followersId === SessionStore.currentUser().id) {
      usersFollowings.push(following);
    }
  });
  return usersFollowings;
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
