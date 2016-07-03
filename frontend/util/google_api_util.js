const GoogleApiActions = require('../actions/google_api_actions');

const GoogleApiUtil = {
  getDirections: function (start, end, waypoints) {
    var request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.BICYCLING,
      waypoints: waypoints,
      optimizeWaypoints: false,
      provideRouteAlternatives: false
    };
    var directionsService = new google.maps.DirectionsService();

    directionsService.route(request, function (result, status) {
      GoogleApiActions.setDirections(result, status);
    });
  },

  getSnappedPos: function (lat, lng, callback) {
    $.get('https://roads.googleapis.com/v1/snapToRoads', {
      key: window.GOOGLE_KEYS.GOOGLE_ROAD,
      path: lat + "," + lng
    }, function (data) {

      callback(data);
    });
  },

  resetElevation: function () {
    GoogleApiActions.resetElevation();
  },

  receiveElevation: function (elevations) {
    ApiActions.reciveElevationData(elevations);
  },

  storeMarkers: function (markers) {
    GoogleApiActions.storeMarkers(markers);
  }
};

module.exports = GoogleApiUtil;
