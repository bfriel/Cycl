const React = require('react'),
      ElevationStore = require('../../stores/elevation'),
      DirectionsStore = require('../../stores/directions'),
      GoogleApiUtil = require('../../util/google_api_util');


const ElevationChart = React.createClass({
  getInitialState: function () {
    return {
      elevation: ElevationStore.elevations()
    };
  },

  componentDidMount: function () {
    this.directionsListener = DirectionsStore.addListener(this._fetchElevation);
    this.elevationListener = ElevationStore.addListener(this._elevationChange);
  },

  componentWillUnmount: function () {
    this.directionsListener.remove();
    this.elevationListener.remove();
  },

  _fetchElevation: function () {
    var waypoints = DirectionsStore.directions().routes[0].overview_path;

    this._getElevation(waypoints);
  },

  _getElevation: function (path) {
    var distance = DirectionsStore.distance();
    var elevator = new google.maps.ElevationService();

    elevator.getElevationAlongPath({
      path: path,
      samples: distance * 25
    }, this.receiveElevation);
  },

  receiveElevation: function (elevations, status) {
    if (status === 'OK') {
      this.plotElevation(elevations);
      GoogleApiUtil.receiveElevation(elevations);
    } else {
      console.log("elevation error: " + status);
    }
  },

  plotElevation: function (elevations) {
    var chartDiv = document.getElementById('elevation-chart');

    var dataArray = this.convertToArray(elevations);

    var data = new google.visualization.arrayToDataTable(dataArray);
    var chart = new google.visualization.LineChart(chartDiv);

    chart.draw(data, {
      height: 200,
      legend: 'none',
      titleY: 'Elevation (m)',
      titleX: 'Distance (mi)'
    });
  },

  convertToArray: function (elevations) {
    var data = [['Distance', 'Elevation']];
    var distance = DirectionsStore.distance();
    var increment = distance / elevations.length;
    var reversedElevation = elevations.reverse();

    reversedElevation.forEach(function (elevation, idx) {
      data.push([idx * increment, elevation.elevation]);
    });

    return data;
  },

  _elevationChange: function () {
    this.setState({
      elevation: ElevationStore.elevations()
    });
  },

  render: function () {
    return (
      <div id="elevation-chart">

      </div>
    );
  }
});

module.exports = ElevationChart;
