# Phase 2: Flux Architecture, Follower Model and JSON API

## Rails
### Models
* Follower


### Controllers
* Api:: FollowersController(create, destroy, index)

### Views
* Users/index.json.jbuilder
* UserTotals/show.json.jbuilder
* Follow/create.json.jbuilder
* Follow/index.json.jbuilder

## Flux
### Views (React Components)
* UsersIndex
* UserTotals
* UserFollowsTotals

### Stores
* User

### Actions
* User.Actions.createUser
* User.Actions.editUser
* ApiActions.receiveAllUserTotals -> triggered by ApiUtil
* UserActions.fetchAllUserTotals -> triggers ApiUtil
* UserActions.createFollow
* UserActions.destroyNotebook

### ApiUtil
* ApiUtil.fetchAllUserTotals
* ApiUtil.createFollow
* ApiUtil.destroyFollow


## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
