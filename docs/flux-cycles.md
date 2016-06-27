# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Route Cycles

### Routes API Request Actions

* `fetchAllRoutes`
  0. invoked from `RoutesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/routes` is called.
  0. `receiveAllRoutes` is set as the callback.

* `createRoute`
  0. invoked from Create a Route button `onClick`
  0. `POST /api/routes` is called.
  0. `receiveSingleRoute` is set as the callback.

* `fetchSingleRoute`
  0. invoked from `RouteItem` `didMount`/`willReceiveProps`
  0. `GET /api/routes/:id` is called.
  0. `receiveSingleRoute` is set as the callback.


### Routes API Response Actions

* `receiveAllroutes`
  0. invoked from an API callback.
  0. `Route` store updates `_routes` and emits change.

* `receiveSingleRoute`
  0. invoked from an API callback.
  0. `Route` store updates `_routes[id]` and emits change.


### Store Listeners

* `RoutesIndex` component listens to `Route` store.
* `RouteItem` component listens to `Route` store.


## Followers Cycles

### Followers API Request Actions

* `fetchAllFollowers`
  0. invoked from `FollowersIndex` `didMount`/`willReceiveProps`
  0. `GET /api/followers` is called.
  0. `receiveAllFollowers` is set as the callback.

* `createFollow`
  0. invoked from follow button `onClick`
  0. `POST /api/notebooks` is called.
  0. `receiveSingleNotebook` is set as the callback.

* `fetchSingleFollower`
  0. invoked from `FollowerItem` `didMount`/`willReceiveProps`
  0. `GET /api/followers/:id` is called.
  0. `receiveSingleFollower` is set as the callback.

### Followers API Response Actions

* `receiveAllFollowers`
  0. invoked from an API callback.
  0. `Follower` store updates `_followers` and emits change.

* `receiveSingleFollower`
  0. invoked from an API callback.
  0. `Follower` store updates `_followers[id]` and emits change.

* `removeFollower`
  0. invoked from an API callback.
  0. `Follower` store removes `_followers[id]` and emits change.

### Store Listeners

* `FollowersIndex` component listens to `Followers` store.


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `NoteSearchBar` `onChange` when there is text
  0. `GET /api/notes` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `NoteSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
