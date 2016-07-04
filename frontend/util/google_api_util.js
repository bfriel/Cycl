const GoogleApiActions = require('../actions/google_api_actions');

const GoogleApiUtil = {
  getDirections(start, end, waypoints) {
    var request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.BICYCLING,
      waypoints: waypoints,
      optimizeWaypoints: false,
      provideRouteAlternatives: false
    };
    let directionsService = new google.maps.DirectionsService();

    directionsService.route(request, function (result, status) {
      GoogleApiActions.setDirections(result, status);
    });
  },

  getSnappedPos(lat, lng, callback) {
    $.get('https://roads.googleapis.com/v1/snapToRoads', {
      key: window.GOOGLE_KEYS.GOOGLE_ROAD,
      path: lat + "," + lng
    }, function (data) {

      callback(data);
    });
  },

  resetElevation() {
    GoogleApiActions.resetElevation();
  },

  receiveElevation(elevations) {
    GoogleApiActions.reciveElevationData(elevations);
  },

  storeMarkers(markers) {
    GoogleApiActions.storeMarkers(markers);
  }
};

module.exports = GoogleApiUtil;
