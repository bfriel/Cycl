const React = require('react'),
      ElevationStore = require('../../stores/elevation'),
      DirectionsStore = require('../../stores/directions'),
      GoogleApiUtil = require('../../util/google_api_util');


const ElevationChart = React.createClass({
  getInitialState() {
    return {
      elevation: ElevationStore.elevations()
    };
  },

  componentDidMount() {
    this.directionsListener = DirectionsStore.addListener(this._fetchElevation);
    this.elevationListener = ElevationStore.addListener(this._elevationChange);
  },

  componentWillUnmount() {
    this.directionsListener.remove();
    this.elevationListener.remove();
  },

  _fetchElevation() {
    let waypoints = DirectionsStore.directions().routes[0].overview_path;

    this._getElevation(waypoints);
  },

  _getElevation(path) {
    let distance = DirectionsStore.distance();
    let elevator = new google.maps.ElevationService();

    elevator.getElevationAlongPath({
      path: path,
      samples: distance * 25
    }, this.receiveElevation);
  },

  receiveElevation(elevations, status) {
    if (status === 'OK') {
      this.plotElevation(elevations);
      GoogleApiUtil.receiveElevation(elevations);
    } else {
      console.log("elevation error: " + status);
    }
  },

  plotElevation(elevations) {
    let chartDiv = document.getElementById('elevation-chart');

    let dataArray = this.convertToArray(elevations);

    let data = new google.visualization.arrayToDataTable(dataArray);
    let chart = new google.visualization.LineChart(chartDiv);

    chart.draw(data, {
      height: 200,
      legend: 'none',
      titleY: 'Elevation (m)',
      titleX: 'Distance (mi)'
    });
  },

  convertToArray(elevations) {
    let data = [['Distance', 'Elevation']];
    let distance = DirectionsStore.distance();
    let increment = distance / elevations.length;
    let reversedElevation = elevations.reverse();

    reversedElevation.forEach(function (elevation, idx) {
      data.push([idx * increment, elevation.elevation]);
    });

    return data;
  },

  _elevationChange() {
    this.setState({
      elevation: ElevationStore.elevations()
    });
  },

  render() {
    return (
      <div id="elevation-chart">
        <p id="pre-chart-message">
          Begin mapping to show your ride's elevation chart
        </p>
      </div>
    );
  }
});

module.exports = ElevationChart;
