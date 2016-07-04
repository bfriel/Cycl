const React = require('react'),
      ReactDOM = require('react-dom');
const GoogleApiUtil = require('../../util/google_api_util'),
      DirectionStore = require('../../stores/directions'),
      OldRideStore = require('../../stores/old_ride');

const CreateRideMap = React.createClass({
  getInitialState() {
    return {
      markers: [],
      directions: DirectionStore.directions()
    };
  },

  componentDidMount() {
    const map = ReactDOM.findDOMNode(this.refs.map);
    const bikeLayer = new google.maps.BicyclingLayer();
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    this.map = new google.maps.Map(map, mapOptions);
    bikeLayer.setMap(this.map);

    const displayOptions = {
      suppressMarkers: true,
      preserveViewport: true
    };

    this.directionsDisplay = new google.maps.DirectionsRenderer(displayOptions);
    this.clickListener = google.maps.event.addListener(this.map, 'click', this.handleClick);
    this.directionsListener = DirectionStore.addListener(this.updateDirections);
    this.oldRideListener = OldRideStore.addListener(this.showOldRide);
  },

  componentWillUnmount() {
    this.clickListener.remove();
    this.directionsListener.remove();
    this.oldRideListener.remove();
  },

  showOldRide() {
    this.removeAllMarkers();

    if (Object.keys(OldRideStore.ride()).length === 0) {
      return;
    }

    const oldRide = JSON.parse(OldRideStore.ride().ride_path);

    let markers = [];
    let marker;

    for (var i = 0; i < oldRide.length; i++) {
      let latLng = { lat: oldRide[i][0], lng: oldRide[i][1] };

      if (i === 0) {
        marker = this.placeEndMarker(latLng);
      } else if (i === oldRide.length - 1) {
        marker = this.placeStartMarker(latLng);
      } else {
        marker = this.placeMiddleMarker(latLng);
      }

      markers.push(marker);
    }

    this.setState({ markers: markers }, this.getDirections);
  },

  handleClick(e) {
    if (this.state.markers.length === 10) {
      return;
    }
    let lat = e.latLng.lat();
    let lng = e.latLng.lng();

    this.getCorrectedClickPos(lat, lng);
  },

  getCorrectedClickPos(lat, lng) {
    GoogleApiUtil.getSnappedPos(lat, lng, this.snappedPos);
  },

  snappedPos(data) {
    let position = data.snappedPoints[0].location;
    let lat = position.latitude;
    let lng = position.longitude;

    this.placeNewMarker(lat, lng);
  },

  updateDirections() {
    this.setState({ directions: DirectionStore.directions() });
    this.renderDirections();
  },

  renderDirections() {
    this.directionsDisplay.setDirections(this.state.directions);
  },

  ICONS: {
    start: "assets/start_marker.png",
    middle: "assets/middle_marker.png",
    end: "assets/stop_marker.png"
  },

  placeNewMarker(lat, lng) {
    let markers = this.state.markers;
    let latLng = { lat: lat, lng: lng };
    let marker;
    let oldMarker;
    let oldLatLng;

    if (markers.length === 0) {
      marker = this.placeStartMarker(latLng);
    } else if (markers.length === 1) {
      marker = this.placeEndMarker(latLng);
    } else if (markers.length > 1) {
      oldMarker = markers[0];
      this.removeMarker(oldMarker);
      markers.shift();
      oldLatLng = {
        lat: oldMarker.position.lat(),
        lng: oldMarker.position.lng()
      };

      markers.unshift(this.placeMiddleMarker(oldLatLng));
      marker = this.placeEndMarker(latLng);
    }

    markers.unshift(marker);
    this.setState({ markers: markers });

    if (markers.length > 1) {
      this.getDirections();
    }
  },

  placeStartMarker(latLng) {
    return new google.maps.Marker({
      position: latLng,
      icon: this.ICONS.start,
      map: this.map
    });
  },

  placeMiddleMarker(latLng) {
    return new google.maps.Marker({
      position: latLng,
      icon: this.ICONS.middle,
      map: this.map
    });
  },

  placeEndMarker(latLng) {
    return new google.maps.Marker({
      position: latLng,
      icon: this.ICONS.end,
      map: this.map
    });
  },

  removeMarker(marker) {
    marker.setMap(null);
  },

  getDirections() {
    let waypoints = this.createWaypoints();
    let start = waypoints[0].location;
    let end = waypoints[waypoints.length - 1].location;
    waypoints.pop();
    waypoints.shift();

    GoogleApiUtil.getDirections(start, end, waypoints);
    this.directionsDisplay.setMap(this.map);
    GoogleApiUtil.storeMarkers(this.state.markers);
  },

  createWaypoints() {
    let markers = this.state.markers;
    let waypoints = [];

    markers.forEach( (marker) => {
      let latLng = new google.maps.LatLng(marker.position.lat(), marker.position.lng());

      waypoints.push({
        location: latLng,
        stopover: false
      });
    });
    return waypoints;
  },

  removeAllMarkers() {
    this.directionsDisplay.setMap(null);
    // ApiUtil.resetMapData();

    this.state.markers.forEach( (marker) => {
      marker.setMap(null);
    });

    this.setState({ markers: [] });
  },

  render() {
    return (
      <div className='map' ref='map'>
      </div>
    );
  }
});

module.exports = CreateRideMap;
