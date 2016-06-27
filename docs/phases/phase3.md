# Phase 3: Google Maps API / Routes (2 days)

## Rails
### Models
* Routes

### Controllers
* Api:RoutesController(create, index, show)

### Views
* Route/index.json.jbuilder
* Route/create.json.jbuilder

## Flux
### Views (React Components)
* RoutesIndex
* RoutesIndexItem

### Stores
* Route

### Actions
* ApiActions.receiveUpdatedMap -> triggered by ApiUtil
* ApiActions.receiveRouteInfo -> triggered by ApiUtil
* ApiActions.showRoutePage -> triggered by ApiUtil
* MapActions.createMap
* MapActions.getMapInfo
* MapActions.ShowMap

### ApiUtil
* ApiUtil.UpdateMap
* ApiUtil.SaveRoute
* ApiUtil.GetRouteInfo

## Gems/Libraries
