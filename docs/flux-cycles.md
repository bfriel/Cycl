# Flux Cycles

## Ride Cycles

### Rides API Request Actions

* `fetchAllRides`
  0. invoked from `RidesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/rides` is called.
  0. `receiveAllRides` is set as the callback.

* `createRide`
  0. invoked from Create a Route button `onClick`
  0. `POST /api/rides` is called.
  0. `receiveSingleRide` is set as the callback.

* `fetchSingleRide`
  0. invoked from `RideItem` `didMount`/`willReceiveProps`
  0. `GET /api/rides/:id` is called.
  0. `receiveSingleRoute` is set as the callback.


### Routes API Response Actions

* `receiveAllRides`
  0. invoked from an API callback.
  0. `Ride` store updates `_rides` and emits change.

* `receiveSingleRide`
  0. invoked from an API callback.
  0. `Ride` store updates `_rides[id]` and emits change.


### Store Listeners

* `RidesIndex` component listens to `Ride` store.
* `RideItem` component listens to `Ride` store.


## Followers Cycles

### Followers API Request Actions

* `fetchAllFollowees`
  0. invoked from `FolloweesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/followees` is called.
  0. `receiveAllFollowees` is set as the callback.

* `createFollow`
  0. invoked from follow button `onClick`
  0. `POST /api/followees` is called.
  0. `receiveSingleFollowee` is set as the callback.

* `fetchSingleFollowee`
  0. invoked from `FolloweeItem` `didMount`/`willReceiveProps`
  0. `GET /api/followees/:id` is called.
  0. `receiveSingleFollowee` is set as the callback.

### Followers API Response Actions

* `receiveAllFollowees`
  0. invoked from an API callback.
  0. `Followee` store updates `_followees` and emits change.

* `receiveSingleFollowee`
  0. invoked from an API callback.
  0. `Followee` store updates `_followees[id]` and emits change.

* `removeFollowee`
  0. invoked from an API callback.
  0. `Followee` store removes `_followees[id]` and emits change.

### Store Listeners

* `FolloweesIndex` component listens to `Followees` store.


## Comments Cycles

### Comments API Request Actions

* `fetchAllCommments`
  0. invoked from `RideItem` `onComponentDidMount`
  0. `receiveAllCommments` is set as the callback.

* `createComment`
  0. invoked from `RideItem` `onClick` of button
  0. `POST /api/rides/:id/comments` request is made
  0. `receiveAllComments` is set as the callback.

### Routes API Response Actions

* `receiveAllComments`
  0. invoked from an API callback.
  0. `Comments` store updates `_comments` and emits change.

### Store Listeners

* `Comments` component listens to `Comments` store.
